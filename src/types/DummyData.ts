import Project from "./Project";
import { Topic, TweetTopic } from "./Topic";
import { Sentiment, TSentiment } from "./Sentiment";
import { Emotion, TEmotion } from "./Emotion";
import { Buzzer } from "./Buzzer";
import { Community } from "./Community";
import { ChatbotPromptTopics, ChatbotMessage } from "./Chatbot";

// Dummy Projects - Social Business Context
export const DUMMY_PROJECTS: Project[] = [
  {
    _id: "dummy-project-001",
    title: "Social Entrepreneurship in Indonesia 2024",
    description:
      "Analysis of social entrepreneurship discussions, impact investing trends, and social innovation initiatives across Indonesian social media platforms.",
    topic_category: "social entrepreneurship",
    start_date_crawl: "2024-01-01",
    end_date_crawl: "2024-01-31",
    keyword: "social entrepreneurship",
    language: "en",
  },
  {
    _id: "dummy-project-002",
    title: "Corporate Social Responsibility Trends",
    description:
      "Comprehensive analysis of CSR initiatives, sustainable business practices, and corporate impact discussions in the business community.",
    topic_category: "corporate social responsibility",
    start_date_crawl: "2024-02-01",
    end_date_crawl: "2024-02-29",
    keyword: "corporate social",
    language: "en",
  },
  {
    _id: "dummy-project-003",
    title: "Sustainable Development Goals Impact",
    description:
      "Public discourse analysis on SDG implementation, social impact measurement, and sustainable business model adoption in emerging markets.",
    topic_category: "sustainable development",
    start_date_crawl: "2024-03-01",
    end_date_crawl: "2024-03-31",
    keyword: "sustainable development",
    language: "en",
  },
];

// Dummy Topics - Social Business Context
export const DUMMY_TOPICS: Topic[] = [
  {
    context:
      "Discussion about social entrepreneurship models and their impact on community development",
    keyword: "social entrepreneurship OR social enterprise OR impact investing",
    projectId: "dummy-project-001",
    topicId: 1,
    words: [
      "social",
      "entrepreneurship",
      "impact",
      "community",
      "innovation",
      "purpose",
      "mission",
    ],
  },
  {
    context:
      "Impact investing trends and social finance mechanisms for scaling social ventures",
    keyword: "impact investing OR social finance OR blended finance",
    projectId: "dummy-project-001",
    topicId: 2,
    words: [
      "investment",
      "capital",
      "returns",
      "social",
      "financial",
      "scale",
      "funding",
    ],
  },
  {
    context:
      "Corporate social responsibility initiatives and ESG reporting practices",
    keyword: "CSR OR corporate social responsibility OR ESG",
    projectId: "dummy-project-002",
    topicId: 3,
    words: [
      "corporate",
      "responsibility",
      "sustainability",
      "governance",
      "environment",
      "stakeholder",
    ],
  },
  {
    context:
      "Sustainable Development Goals implementation and social impact measurement",
    keyword: "SDG OR sustainable development OR social impact",
    projectId: "dummy-project-003",
    topicId: 4,
    words: [
      "sustainable",
      "development",
      "goals",
      "impact",
      "measurement",
      "poverty",
      "education",
    ],
  },
];

// Dummy Tweet Topics - Social Business Context
export const DUMMY_TWEET_TOPICS: TweetTopic[] = [
  {
    full_text:
      "Social entrepreneurship is revolutionizing how we solve societal problems. The rise of impact-driven businesses shows that profit and purpose can coexist beautifully. #SocialEntrepreneurship #ImpactBusiness",
    tweet_url: "https://twitter.com/user1/status/1234567890",
    username: "impact_pioneer",
  },
  {
    full_text:
      "Just attended an amazing panel on impact investing! The potential for capital to drive positive social change while generating returns is truly inspiring. The future of finance is purpose-driven. #ImpactInvesting",
    tweet_url: "https://twitter.com/user2/status/1234567891",
    username: "sustainable_investor",
  },
  {
    full_text:
      "Corporate Social Responsibility isn't just about charity anymore - it's about embedding social and environmental impact into core business strategy. ESG metrics are becoming the new bottom line. #CSR #ESG",
    tweet_url: "https://twitter.com/user3/status/1234567892",
    username: "csr_advocate",
  },
  {
    full_text:
      "The SDGs provide a roadmap for businesses to create meaningful impact. Companies that align with sustainable development goals are not just doing good - they're building resilient, future-ready organizations.",
    tweet_url: "https://twitter.com/user4/status/1234567893",
    username: "sdg_champion",
  },
  {
    full_text:
      "B Corporations are proving that business can be a force for good. The B Corp movement is creating a new paradigm where success is measured by positive impact on all stakeholders, not just shareholders.",
    tweet_url: "https://twitter.com/user5/status/1234567894",
    username: "bcorp_leader",
  },
  {
    full_text:
      "Social innovation labs are becoming crucial for addressing complex societal challenges. These collaborative spaces bring together entrepreneurs, investors, and communities to co-create solutions.",
    tweet_url: "https://twitter.com/user6/status/1234567895",
    username: "innovation_hub",
  },
  {
    full_text:
      "The rise of social impact bonds shows how innovative financing can tackle social problems. When investors get returns based on social outcomes, everyone wins - investors, communities, and society.",
    tweet_url: "https://twitter.com/user7/status/1234567896",
    username: "social_finance_expert",
  },
  {
    full_text:
      "Microfinance and inclusive business models are empowering millions of people to escape poverty. Financial inclusion is not just about access - it's about creating pathways to prosperity.",
    tweet_url: "https://twitter.com/user8/status/1234567897",
    username: "financial_inclusion",
  },
];

// Dummy Sentiment Data - Enhanced for Social Business Context
export const DUMMY_SENTIMENT: Sentiment = {
  total_data: 18750,
  positive_cnn: 12500,
  negative_cnn: 6250,
  positive_cnn_lstm: 13125,
  negative_cnn_lstm: 5625,
  positive_percentage_cnn: 66.7,
  negative_percentage_cnn: 33.3,
  positive_percentage_cnn_lstm: 70.0,
  negative_percentage_cnn_lstm: 30.0,
};

export const DUMMY_SENTIMENT_TWEETS: TSentiment[] = [
  {
    full_text:
      "The growth of social enterprises gives me hope for solving poverty and inequality through business innovation!",
    tweet_url: "https://twitter.com/user1/status/1234567895",
    username: "social_impact_fan",
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    topic: "1",
  },
  {
    full_text:
      "Unfortunately, many impact investments still struggle to demonstrate clear social returns. We need better measurement frameworks.",
    tweet_url: "https://twitter.com/user2/status/1234567896",
    username: "impact_critic",
    predicted_sentiment_cnn: "Negatif",
    predicted_sentiment_cnn_lstm: "Negatif",
    topic: "2",
  },
  {
    full_text:
      "B Corporations are leading the way in showing that business can be a powerful force for positive social and environmental change!",
    tweet_url: "https://twitter.com/user3/status/1234567897",
    username: "purpose_driven_business",
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    topic: "3",
  },
  {
    full_text:
      "Corporate CSR programs often feel like greenwashing rather than genuine commitment to social responsibility.",
    tweet_url: "https://twitter.com/user4/status/1234567898",
    username: "sustainability_skeptic",
    predicted_sentiment_cnn: "Negatif",
    predicted_sentiment_cnn_lstm: "Negatif",
    topic: "3",
  },
  {
    full_text:
      "The SDGs provide an amazing framework for businesses to create meaningful impact while building sustainable operations.",
    tweet_url: "https://twitter.com/user5/status/1234567899",
    username: "sdg_enthusiast",
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    topic: "4",
  },
];

// Dummy Emotion Data - Social Business Context
export const DUMMY_EMOTION: Emotion = {
  total_data: 18750,
  fear_cnn: 1125,
  sad_cnn: 1875,
  love_cnn: 5625,
  joy_cnn: 6750,
  anger_cnn: 1875,
  neutral_cnn: 1500,
  fear_bilstm: 1050,
  sad_bilstm: 1688,
  love_bilstm: 6000,
  joy_bilstm: 7125,
  anger_bilstm: 1687,
  neutral_bilstm: 1200,
  fear_percentage_cnn: 6.0,
  sad_percentage_cnn: 10.0,
  love_percentage_cnn: 30.0,
  joy_percentage_cnn: 36.0,
  anger_percentage_cnn: 10.0,
  neutral_percentage_cnn: 8.0,
  fear_percentage_bilstm: 5.6,
  sad_percentage_bilstm: 9.0,
  love_percentage_bilstm: 32.0,
  joy_percentage_bilstm: 38.0,
  anger_percentage_bilstm: 9.0,
  neutral_percentage_bilstm: 6.4,
};

export const DUMMY_EMOTION_TWEETS: TEmotion[] = [
  {
    full_text:
      "I'm absolutely thrilled about the growth of social entrepreneurship and its potential to solve global challenges!",
    tweet_url: "https://twitter.com/user1/status/1234567898",
    username: "passionate_changemaker",
    predicted_emotions_cnn: "Joy",
    predicted_emotions_bilstm: "Joy",
    topic: "1",
  },
  {
    full_text:
      "I love seeing businesses that prioritize people and planet alongside profit. This gives me so much hope for the future!",
    tweet_url: "https://twitter.com/user2/status/1234567899",
    username: "purpose_lover",
    predicted_emotions_cnn: "Love",
    predicted_emotions_bilstm: "Love",
    topic: "3",
  },
  {
    full_text:
      "Worried about the slow progress in achieving SDGs. We need more urgent action from both governments and businesses.",
    tweet_url: "https://twitter.com/user3/status/1234567900",
    username: "sdg_concerned",
    predicted_emotions_cnn: "Fear",
    predicted_emotions_bilstm: "Fear",
    topic: "4",
  },
  {
    full_text:
      "It's frustrating when companies use social impact as a marketing gimmick without real commitment to change.",
    tweet_url: "https://twitter.com/user4/status/1234567901",
    username: "authenticity_advocate",
    predicted_emotions_cnn: "Anger",
    predicted_emotions_bilstm: "Anger",
    topic: "3",
  },
  {
    full_text:
      "Saddened by the persistence of poverty despite decades of development efforts. We need more innovative approaches.",
    tweet_url: "https://twitter.com/user5/status/1234567902",
    username: "development_observer",
    predicted_emotions_cnn: "Sad",
    predicted_emotions_bilstm: "Sad",
    topic: "4",
  },
];

// Dummy Buzzer Data - Social Business Influencers
export const DUMMY_BUZZERS: Buzzer[] = [
  {
    username: "social_impact_guru",
    followers_count: 250000,
    following_count: 1500,
    tweet_count: 18500,
    listed_count: 156,
    favourites_count: 75000,
    account_age_days: 2190,
    verified: true,
    default_profile: false,
    default_profile_image: false,
    geo_enabled: true,
    profile_use_background_image: true,
    profile_background_image_url: "https://example.com/social_impact_bg.jpg",
    profile_image_url: "https://example.com/social_impact_profile.jpg",
    has_extended_profile: true,
    is_translation_enabled: false,
    is_translator: false,
    translated_bio: "",
    withheld_in_countries: [],
    withheld_scope: "",
    buzzer_score: 0.94,
    buzzer_prediction: "buzzer",
  },
  {
    username: "sustainable_biz_leader",
    followers_count: 180000,
    following_count: 1200,
    tweet_count: 15600,
    listed_count: 98,
    favourites_count: 52000,
    account_age_days: 1825,
    verified: true,
    default_profile: false,
    default_profile_image: false,
    geo_enabled: true,
    profile_use_background_image: true,
    profile_background_image_url: "https://example.com/sustainability_bg.jpg",
    profile_image_url: "https://example.com/sustainability_profile.jpg",
    has_extended_profile: true,
    is_translation_enabled: false,
    is_translator: false,
    translated_bio: "",
    withheld_in_countries: [],
    withheld_scope: "",
    buzzer_score: 0.89,
    buzzer_prediction: "buzzer",
  },
  {
    username: "impact_investor_pro",
    followers_count: 135000,
    following_count: 950,
    tweet_count: 12400,
    listed_count: 87,
    favourites_count: 38500,
    account_age_days: 1460,
    verified: false,
    default_profile: false,
    default_profile_image: false,
    geo_enabled: true,
    profile_use_background_image: true,
    profile_background_image_url: "https://example.com/investment_bg.jpg",
    profile_image_url: "https://example.com/investment_profile.jpg",
    has_extended_profile: true,
    is_translation_enabled: false,
    is_translator: false,
    translated_bio: "",
    withheld_in_countries: [],
    withheld_scope: "",
    buzzer_score: 0.87,
    buzzer_prediction: "buzzer",
  },
];

// Dummy Community Data - Social Business Ecosystem
export const DUMMY_COMMUNITY: Community = {
  nodes: [
    {
      id: "social_entrepreneurs",
      name: "Social Entrepreneurs Network",
      group: 1,
      community: 1,
      followers_count: 45000,
      following_count: 2500,
    },
    {
      id: "impact_investors",
      name: "Impact Investors Circle",
      group: 2,
      community: 2,
      followers_count: 67000,
      following_count: 1800,
    },
    {
      id: "csr_professionals",
      name: "CSR & Sustainability Pros",
      group: 3,
      community: 3,
      followers_count: 38000,
      following_count: 3200,
    },
    {
      id: "sdg_advocates",
      name: "SDG Implementation Network",
      group: 4,
      community: 4,
      followers_count: 52000,
      following_count: 2100,
    },
    {
      id: "social_innovators",
      name: "Social Innovation Hub",
      group: 5,
      community: 1,
      followers_count: 29000,
      following_count: 1950,
    },
  ],
  links: [
    {
      source: "social_entrepreneurs",
      target: "impact_investors",
      value: 8,
      topic: "1",
      source_community: 1,
      target_community: 2,
    },
    {
      source: "impact_investors",
      target: "csr_professionals",
      value: 6,
      topic: "2",
      source_community: 2,
      target_community: 3,
    },
    {
      source: "csr_professionals",
      target: "sdg_advocates",
      value: 7,
      topic: "3",
      source_community: 3,
      target_community: 4,
    },
    {
      source: "social_entrepreneurs",
      target: "social_innovators",
      value: 9,
      topic: "1",
      source_community: 1,
      target_community: 1,
    },
    {
      source: "sdg_advocates",
      target: "social_innovators",
      value: 5,
      topic: "4",
      source_community: 4,
      target_community: 1,
    },
  ],
};

// Dummy Chatbot Prompts - Social Business Context
export const DUMMY_CHATBOT_PROMPTS: ChatbotPromptTopics = {
  topic1: {
    question1: {
      prompt_pertanyaan: "What are the main trends in social entrepreneurship?",
      optimal_prompt:
        "Analyze the key trends and developments in social entrepreneurship based on social media discussions, including emerging business models and impact areas.",
    },
    question2: {
      prompt_pertanyaan:
        "How is the social entrepreneurship community responding to funding challenges?",
      optimal_prompt:
        "Examine discussions about funding challenges faced by social enterprises and the community's proposed solutions and strategies.",
    },
    question3: {
      prompt_pertanyaan:
        "What impact metrics are most discussed for social ventures?",
      optimal_prompt:
        "Identify and analyze the most frequently mentioned social impact measurement frameworks and metrics in the discourse.",
    },
  },
  topic2: {
    question1: {
      prompt_pertanyaan: "How do people perceive impact investing returns?",
      optimal_prompt:
        "Analyze public sentiment and perceptions regarding financial and social returns from impact investments based on social media data.",
    },
    question2: {
      prompt_pertanyaan: "What are the barriers to scaling impact investments?",
      optimal_prompt:
        "Examine discussions about challenges and obstacles in scaling impact investing initiatives and proposed solutions.",
    },
  },
  topic3: {
    question1: {
      prompt_pertanyaan:
        "How authentic do people find current CSR initiatives?",
      optimal_prompt:
        "Analyze public perception of corporate social responsibility initiatives, focusing on authenticity and effectiveness concerns.",
    },
    question2: {
      prompt_pertanyaan:
        "What ESG practices generate the most positive discussion?",
      optimal_prompt:
        "Identify ESG (Environmental, Social, Governance) practices that receive the most positive sentiment in social media discussions.",
    },
  },
  topic4: {
    question1: {
      prompt_pertanyaan:
        "Which SDGs are getting the most attention in business discussions?",
      optimal_prompt:
        "Analyze which Sustainable Development Goals are most frequently discussed in business and social media contexts.",
    },
    question2: {
      prompt_pertanyaan:
        "How do businesses view SDG implementation challenges?",
      optimal_prompt:
        "Examine business perspectives on challenges and opportunities in implementing SDG-aligned strategies.",
    },
  },
};

// Dummy Chatbot Response - Social Business Context
export const DUMMY_CHATBOT_RESPONSE: ChatbotMessage = {
  text: "Based on the analysis of social business discussions, key themes include the growth of impact-driven entrepreneurship, increasing interest in ESG investing, and the integration of social impact metrics into business models. Sentiment analysis shows 70% positive sentiment toward social business initiatives, with particular enthusiasm for B Corp certification and SDG alignment. The community shows strong engagement around topics of financial inclusion, sustainable supply chains, and purpose-driven leadership.",
  isUser: false,
  isLoading: false,
  questions: [
    {
      prompt_pertanyaan:
        "What specific social business models are gaining the most traction?",
    },
    {
      prompt_pertanyaan:
        "How do investors evaluate social impact alongside financial returns?",
    },
    {
      prompt_pertanyaan:
        "What are the main challenges facing social enterprises in scaling their impact?",
    },
  ],
};

// Helper function to get dummy data based on project ID
export const getDummyDataByProject = (projectId: string) => {
  const project = DUMMY_PROJECTS.find((p) => p._id === projectId);
  if (!project) return null;

  const topics = DUMMY_TOPICS.filter((t) => t.projectId === projectId);
  const tweets = DUMMY_TWEET_TOPICS.slice(0, 10); // Sample tweets
  const sentimentTweets = DUMMY_SENTIMENT_TWEETS.filter((s) =>
    topics.some((t) => t.topicId.toString() === s.topic)
  );
  const emotionTweets = DUMMY_EMOTION_TWEETS.filter((e) =>
    topics.some((t) => t.topicId.toString() === e.topic)
  );

  return {
    project,
    topics,
    tweets,
    sentiment: DUMMY_SENTIMENT,
    sentimentTweets,
    emotion: DUMMY_EMOTION,
    emotionTweets,
    buzzers: DUMMY_BUZZERS,
    community: DUMMY_COMMUNITY,
    chatbotPrompts: DUMMY_CHATBOT_PROMPTS,
  };
};

// Offline data provider
export class OfflineDataProvider {
  static getProjects(): Project[] {
    return DUMMY_PROJECTS;
  }

  static getProjectById(id: string): Project | null {
    return DUMMY_PROJECTS.find((p) => p._id === id) || null;
  }

  static getTopicsByProject(projectId: string): Topic[] {
    return DUMMY_TOPICS.filter((t) => t.projectId === projectId);
  }

  static getTweetsByProject(projectId: string): TweetTopic[] {
    return DUMMY_TWEET_TOPICS.slice(0, 15); // Return sample tweets
  }

  static getSentimentByProject(projectId: string): Sentiment {
    return DUMMY_SENTIMENT;
  }

  static getSentimentTweetsByProject(projectId: string): TSentiment[] {
    const topics = this.getTopicsByProject(projectId);
    return DUMMY_SENTIMENT_TWEETS.filter((s) =>
      topics.some((t) => t.topicId.toString() === s.topic)
    );
  }

  static getEmotionByProject(projectId: string): Emotion {
    return DUMMY_EMOTION;
  }

  static getEmotionTweetsByProject(projectId: string): TEmotion[] {
    const topics = this.getTopicsByProject(projectId);
    return DUMMY_EMOTION_TWEETS.filter((e) =>
      topics.some((t) => t.topicId.toString() === e.topic)
    );
  }

  static getBuzzersByProject(projectId: string): Buzzer[] {
    return DUMMY_BUZZERS;
  }

  static getCommunityByProject(projectId: string): Community {
    return DUMMY_COMMUNITY;
  }

  static getChatbotPromptsByProject(projectId: string): ChatbotPromptTopics {
    return DUMMY_CHATBOT_PROMPTS;
  }

  static getChatbotResponse(question: string): ChatbotMessage {
    // Simple response based on question keywords
    let response = DUMMY_CHATBOT_RESPONSE;

    if (question.toLowerCase().includes("sentiment")) {
      response = {
        ...response,
        text: "The sentiment analysis shows 70% positive and 30% negative sentiment overall toward social business initiatives. Impact investing and B Corp discussions receive the most positive sentiment, while CSR authenticity concerns generate more critical discussions.",
      };
    } else if (question.toLowerCase().includes("emotion")) {
      response = {
        ...response,
        text: "Emotion analysis reveals that Joy (38%) and Love (32%) are the dominant emotions in social business discussions, indicating strong passion and enthusiasm. This is followed by neutral commentary (6.4%), with lower levels of concern (Fear 5.6%) and frustration (Anger 9%).",
      };
    } else if (question.toLowerCase().includes("topic")) {
      response = {
        ...response,
        text: "The main topics in social business discussions include social entrepreneurship models, impact investing strategies, corporate social responsibility practices, and SDG implementation. Each topic shows distinct engagement patterns, with social entrepreneurship generating the most passionate responses.",
      };
    } else if (question.toLowerCase().includes("impact")) {
      response = {
        ...response,
        text: "Impact measurement is a central theme, with discussions focusing on social return on investment (SROI), theory of change frameworks, and SDG alignment. The community emphasizes the need for standardized impact metrics and transparent reporting.",
      };
    } else if (
      question.toLowerCase().includes("funding") ||
      question.toLowerCase().includes("investment")
    ) {
      response = {
        ...response,
        text: "Funding discussions reveal excitement about blended finance, social impact bonds, and patient capital. However, there are concerns about the 'impact gap' and the need for more early-stage funding for social ventures.",
      };
    }

    return response;
  }
}
