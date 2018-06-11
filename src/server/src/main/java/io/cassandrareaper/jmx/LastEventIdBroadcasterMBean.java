package io.cassandrareaper.jmx;

import java.util.Map;

public interface LastEventIdBroadcasterMBean
{
    /**
     * Retrieves a list of all event types and their highest IDs.
     */
    Map<String, Comparable> getLastEventIds();

    /**
     * Retrieves a list of all event types and their highest IDs, if updated since specified timestamp, or null.
     * @param lastUpdate timestamp to use to determine if IDs have been updated
     */
    Map<String, Comparable> getLastEventIdsIfModified(long lastUpdate);
}
