import { useEffect, useState } from "react";
import Header from "@/components/header";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useAnalysis } from "@/hooks/AnalysisContext";
import { LoadMoreTweetTopic } from "../../embedded-tweet";
import { CommunityLink } from "@/types/Community";
import { Topic } from "@/types/Topic";
import { Skeleton } from "@/components/ui/skeleton";
import Graph3DCommunity from "./graph3d";
import Graph2DCommunity from "./graph2d";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CommunitySNA = () => {
  const {
    community,
    filteredCommunity,
    selectedProject,
    topics,
    setFilteredCommunity,
  } = useAnalysis();

  const [communityList, setCommunityList] = useState<number[]>([]);
  const [activeCommunity, setActiveCommunity] = useState<number | null>(null);
  const [trenTopic, setTrenTopic] = useState<Topic | null>(null);

  const [selectedGraph, setSelectedGraph] = useState<string>("2d");

  useEffect(() => {
    if (!community) return;

    const communitySet = new Set(community.nodes.map((node) => node.community));
    const sortedCommunityList = Array.from(communitySet).sort((a, b) => a - b);
    setCommunityList(sortedCommunityList);
  }, [community]);

  useEffect(() => {
    if (!community || !topics) return;

    if (activeCommunity === null) {
      setFilteredCommunity(community);
      return;
    }

    // filter community
    const filteredNodes = community.nodes.filter(
      (node) => node.community === activeCommunity
    );
    const filteredLinks = community.links.filter(
      (link) =>
        filteredNodes.some(
          (node) => node.community === link.source_community
        ) &&
        filteredNodes.some((node) => node.community === link.target_community)
    );

    const filteredCommunity = {
      nodes: filteredNodes,
      links: filteredLinks,
    };

    setFilteredCommunity(filteredCommunity);

    // get tren topic
    const topicList = filteredCommunity.links.map((link) => link.topic);
    const topicSet = new Set(topicList);
    const topicCount = Array.from(topicSet).map((topic) => {
      return {
        topic: topic,
        count: topicList.filter((t) => t === topic).length,
      };
    });
    const sortedTopicCount = topicCount.sort((a, b) => b.count - a.count);
    const topic = topics.find(
      (topic) => topic.topicId.toString() === sortedTopicCount[0].topic
    );

    setTrenTopic(topic ?? null);
  }, [activeCommunity, community, topics]);

  const handleTriggerClick = (communityId: number) => {
    // If clicking the same community, close it (set to null)
    // If clicking a different community, open it
    setActiveCommunity(activeCommunity === communityId ? null : communityId);
  };

  const filterTweets = (): CommunityLink[] => {
    if (!community || activeCommunity === null) {
      return [];
    }

    // Filter tweets for the active community
    return community.links.filter(
      (link) =>
        link.source_community === activeCommunity ||
        link.target_community === activeCommunity
    );
  };

  if (!selectedProject) {
    return (
      <section className="flex-grow p-6 bg-white rounded-lg shadow block">
        Please select a project to view the community.
      </section>
    );
  }

  return (
    <section className="w-[761px] min-h-screen p-6 bg-white rounded-lg shadow flex-col justify-start items-start gap-6 inline-flex">
      {/* sna analisis */}
      <div className="self-stretch px-6 py-5 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start gap-5 flex">
        <div className="flex w-full justify-between items-center gap-2">
          <Header label="Keyword" keyword={selectedProject?.keyword ?? ""} />
          <Select
            value={selectedGraph}
            onValueChange={(newGraph) => setSelectedGraph(newGraph)}
          >
            <SelectTrigger className="text-red-700 text-base font-bold leading-tight w-36">
              <SelectValue placeholder="Select Graph" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="2d">{"2D"}</SelectItem>
              <SelectItem value="3d">{"3D"}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {filteredCommunity ? (
          <div className="w-full h-[350px] border border-secondary rounded-2xl overflow-hidden">
            {selectedGraph === "2d" ? (
              <Graph2DCommunity community={filteredCommunity} />
            ) : (
              <Graph3DCommunity community={filteredCommunity} />
            )}
          </div>
        ) : (
          <Skeleton className="h-72 w-full" />
        )}
      </div>
      {/* community tweet */}
      <div className="self-stretch grow shrink basis-0 px-6 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
        <div className="self-stretch h-10 py-1 flex-col justify-start items-start gap-2 flex">
          <Header
            label="Community of Keyword"
            keyword={selectedProject?.keyword ?? ""}
            num={communityList.length.toString()}
            category="Community"
          />
        </div>
        <div className="self-stretch grow shrink basis-0 justify-start items-start gap-5 inline-flex mt-5">
          <div className="grow shrink h-[400px] flex-col justify-start items-start gap-2.5 inline-flex overflow-scroll">
            <div className="self-stretch gap-1">
              <div className="grid gap-2">
                {communityList.length ? (
                  communityList.map((communityId, index) => (
                    <Collapsible
                      key={`community-${communityId}`}
                      open={activeCommunity === communityId}
                      className="border border-gray-200 rounded-xl"
                    >
                      <div className="grid items-center">
                        <CollapsibleTrigger asChild className="px-3 py-8">
                          <Button
                            className={`text-foreground font-bold hover:text-primary-foreground hover:bg-secondary w-full rounded-xl 
                          ${activeCommunity === communityId ? "bg-secondary text-primary-foreground" : "bg-white"}`}
                            onClick={() => handleTriggerClick(communityId)}
                          >
                            <span className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center mr-3">
                              {index + 1}
                            </span>
                            Community {communityId}
                            <span className="ml-auto">
                              {activeCommunity === communityId ? (
                                <ChevronDown />
                              ) : (
                                <ChevronRight />
                              )}
                            </span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="px-4 pb-4">
                        {activeCommunity === communityId && (
                          <>
                            <h4 className="text-zinc-800 font-semibold mb-2">
                              Topic
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                              {trenTopic?.context ||
                                "Loading topic information..."}
                            </p>

                            <h4 className="text-zinc-800 font-semibold mb-2">
                              Detail Tweets
                            </h4>
                            <div className="max-h-60 overflow-y-auto">
                              <LoadMoreTweetTopic
                                items={filterTweets()}
                                itemsPerPage={5}
                              />
                            </div>
                          </>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  ))
                ) : (
                  <>
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySNA;
