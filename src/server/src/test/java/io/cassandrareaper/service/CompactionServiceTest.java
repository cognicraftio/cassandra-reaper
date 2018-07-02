/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.cassandrareaper.service;

import io.cassandrareaper.AppContext;
import io.cassandrareaper.core.Cluster;
import io.cassandrareaper.core.Node;
import io.cassandrareaper.core.RepairUnit;
import io.cassandrareaper.jmx.ColumnFamilyStoreProxy;
import io.cassandrareaper.jmx.JmxConnectionFactory;
import io.cassandrareaper.jmx.JmxProxy;
import io.cassandrareaper.jmx.JmxProxyTest;
import io.cassandrareaper.storage.MemoryStorage;

import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;
import java.util.function.Supplier;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableSet;
import com.google.common.collect.Sets;
import org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy;
import org.apache.cassandra.service.StorageServiceMBean;
import org.awaitility.Awaitility;
import org.awaitility.core.ConditionTimeoutException;
import org.junit.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public final class CompactionServiceTest {

  private static final String CLUSTER_NAME = "test-cluster";
  private static final String KEYSPACE_NAME = "test_keyspace";
  private static final Set<String> ONE_NODE = ImmutableSet.of("127.0.0.1");
  private static final List<String> ALL_NODES = ImmutableList.of("127.0.0.1", "127.0.0.2", "127.0.0.3");

  @Test
  public void testCompact_definedTables() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn(SizeTieredCompactionStrategy.class.getName());

    tester(
        () -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .columnFamilies(Sets.newHashSet("test_table0"))
              .incrementalRepair(false)
              .nodes(ONE_NODE)
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> assertCompactionCalled(storageMBean, "test_table0"));
  }

  @Test
  public void testCompact_lookupTables() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn(SizeTieredCompactionStrategy.class.getName());

    tester(
        () -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .incrementalRepair(false)
              .nodes(ONE_NODE)
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> assertCompactionCalled(storageMBean, "test_table0", "test_table1", "test_table2"));
  }

  @Test
  public void testCompact_definedTables_manyNodes() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn(SizeTieredCompactionStrategy.class.getName());

    tester(
        () -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .columnFamilies(Sets.newHashSet("test_table0"))
              .incrementalRepair(false)
              .nodes(ImmutableSet.copyOf(ALL_NODES))
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> assertCompactionCalled(storageMBean, "test_table0"));
  }

  @Test
  public void testCompact_lookupTables_manyNodes() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn(SizeTieredCompactionStrategy.class.getName());

    tester(
        () -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .incrementalRepair(false)
              .nodes(ImmutableSet.copyOf(ALL_NODES))
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> assertCompactionCalled(storageMBean, "test_table0", "test_table1", "test_table2"));
  }

  @Test
  public void testCompact_definedTables_unsupportedCompactionStrategy() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn("some-unsupported-compaction-strategy");

    tester(() -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .columnFamilies(Sets.newHashSet("test_table0"))
              .incrementalRepair(false)
              .nodes(ImmutableSet.copyOf(ALL_NODES))
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> {
            try {
              Mockito.verify(storageMBean, Mockito.atMost(0))
                  .forceKeyspaceCompaction(Mockito.anyBoolean(), Mockito.anyString(), Mockito.anyString());
            } catch (IOException | InterruptedException | ExecutionException ex) {
              throw new AssertionError(ex);
            }
        });
  }

  @Test
  public void testCompact_lookupTables_unsupportedCompactionStrategy() throws Exception {

    ColumnFamilyStoreProxy cfsProxy = Mockito.mock(ColumnFamilyStoreProxy.class);
    Mockito.when(cfsProxy.getCompactionStrategyClass()).thenReturn("some-unsupported-compaction-strategy");

    tester(
        () -> RepairUnit.builder()
              .clusterName(CLUSTER_NAME)
              .keyspaceName(KEYSPACE_NAME)
              .incrementalRepair(false)
              .nodes(ImmutableSet.copyOf(ALL_NODES))
              .repairThreadCount(1),
        cfsProxy,
        (storageMBean) -> {
            try {
              Mockito.verify(storageMBean, Mockito.atMost(0))
                  .forceKeyspaceCompaction(Mockito.anyBoolean(), Mockito.anyString(), Mockito.anyString());
            } catch (IOException | InterruptedException | ExecutionException ex) {
              throw new AssertionError(ex);
            }
        });
  }

  private void tester(
      Supplier<RepairUnit.Builder> builder,
      ColumnFamilyStoreProxy cfsProxy,
      Consumer<StorageServiceMBean> assertion) throws Exception {

    AppContext cxt = new AppContext();
    cxt.storage = new MemoryStorage();
    cxt.config = TestRepairConfiguration.defaultConfig();

    JmxProxy proxy = (JmxProxy) mock(Class.forName("io.cassandrareaper.jmx.JmxProxyImpl"));
    cxt.jmxConnectionFactory = mock(JmxConnectionFactory.class);
    when(cxt.jmxConnectionFactory.connectAny(Mockito.any(Cluster.class), Mockito.anyInt())).thenReturn(proxy);
    when(cxt.jmxConnectionFactory.connect(Mockito.any(Node.class), Mockito.anyInt())).thenReturn(proxy);
    when(proxy.getLiveNodes()).thenReturn(ALL_NODES);

    Cluster cluster = new Cluster(CLUSTER_NAME, "test-partitioner", ONE_NODE);
    cxt.storage.addCluster(cluster);

    StorageServiceMBean storageMBean = Mockito.mock(StorageServiceMBean.class);
    JmxProxyTest.mockGetStorageServiceMBean(proxy, storageMBean);

    CompactionService service = CompactionService.create(cxt, new CompactionService.ColumnFamilyStoreProxyProvider() {
      @Override
      ColumnFamilyStoreProxy create(String keyspace, String table, JmxProxy proxy) {
        return cfsProxy;
      }
    });

    RepairUnit unit = cxt.storage.addRepairUnit(builder.get());

    Mockito.when(proxy.getTableNamesForKeyspace(KEYSPACE_NAME))
        .thenReturn(Sets.newHashSet("test_table0", "test_table1", "test_table2"));

    service.compact(unit.getId());

    try {
      Awaitility.await().with().atMost(5, TimeUnit.SECONDS).until(() -> {
        try {
          assertion.accept(storageMBean);
          return true;
        } catch (AssertionError ex) {
          return false;
        }
      });
    } catch (ConditionTimeoutException ignore) { }

    assertion.accept(storageMBean);
  }

  private void assertCompactionCalled(StorageServiceMBean storageMBean, String... tableNames) {
    try {
      Mockito.verify(storageMBean, Mockito.atLeastOnce()).forceKeyspaceCompaction(false, KEYSPACE_NAME, tableNames);
    } catch (IOException | InterruptedException | ExecutionException ex) {
      throw new AssertionError(ex);
    }
  }

}
