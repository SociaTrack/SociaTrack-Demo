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
    title: "Social Entrepreneurship in Indonesia 2025",
    description:
      "Analysis of social entrepreneurship discussions, impact investing trends, and social innovation initiatives across Indonesian social media platforms.",
    topic_category: "social entrepreneurship",
    start_date_crawl: "2025-01-01",
    end_date_crawl: "2025-01-31",
    keyword: "social entrepreneurship",
    language: "en",
  },
  {
    _id: "dummy-project-002",
    title: "Corporate Social Responsibility Trends",
    description:
      "Comprehensive analysis of CSR initiatives, sustainable business practices, and corporate impact discussions in the business community.",
    topic_category: "corporate social responsibility",
    start_date_crawl: "2025-02-01",
    end_date_crawl: "2025-02-29",
    keyword: "corporate social",
    language: "en",
  },
  {
    _id: "dummy-project-003",
    title: "Sustainable Development Goals Impact",
    description:
      "Public discourse analysis on SDG implementation, social impact measurement, and sustainable business model adoption in emerging markets.",
    topic_category: "sustainable development",
    start_date_crawl: "2025-03-01",
    end_date_crawl: "2025-03-31",
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
  sentiment_percentage: {
    negative: 30,
    positive: 70,
  },
  sentiment_percentage_by_topic: {
    negative: 25,
    positive: 75,
  },
  sentiment: [], // Add missing sentiment array property
};

export const DUMMY_SENTIMENT_TWEETS: TSentiment[] = [
  {
    _id: "sentiment_001",
    conversation_id_str: "1234567895001",
    full_text:
      "The growth of social enterprises gives me hope for solving poverty and inequality through business innovation!",
    id_str: "1234567895",
    in_reply_to_screen_name: undefined,
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    predicted_sentiment_cnn_probability: 0.85,
    predicted_sentiment_cnn_lstm_probability: 0.92,
    processed_text:
      "growth social enterprises hope solving poverty inequality business innovation",
    project_id: "dummy-project-001",
    topic: "1",
    tweet_url: "https://twitter.com/user1/status/1234567895",
  },
  {
    _id: "sentiment_002",
    conversation_id_str: "1234567896001",
    full_text:
      "Unfortunately, many impact investments still struggle to demonstrate clear social returns. We need better measurement frameworks.",
    id_str: "1234567896",
    in_reply_to_screen_name: undefined,
    predicted_sentiment_cnn: "Negatif",
    predicted_sentiment_cnn_lstm: "Negatif",
    predicted_sentiment_cnn_probability: 0.78,
    predicted_sentiment_cnn_lstm_probability: 0.82,
    processed_text:
      "unfortunately impact investments struggle demonstrate clear social returns need better measurement frameworks",
    project_id: "dummy-project-001",
    topic: "2",
    tweet_url: "https://twitter.com/user2/status/1234567896",
  },
  {
    _id: "sentiment_003",
    conversation_id_str: "1234567897001",
    full_text:
      "B Corporations are leading the way in showing that business can be a powerful force for positive social and environmental change!",
    id_str: "1234567897",
    in_reply_to_screen_name: undefined,
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    predicted_sentiment_cnn_probability: 0.91,
    predicted_sentiment_cnn_lstm_probability: 0.94,
    processed_text:
      "b corporations leading way showing business powerful force positive social environmental change",
    project_id: "dummy-project-002",
    topic: "3",
    tweet_url: "https://twitter.com/user3/status/1234567897",
  },
  {
    _id: "sentiment_004",
    conversation_id_str: "1234567898001",
    full_text:
      "Corporate CSR programs often feel like greenwashing rather than genuine commitment to social responsibility.",
    id_str: "1234567898",
    in_reply_to_screen_name: undefined,
    predicted_sentiment_cnn: "Negatif",
    predicted_sentiment_cnn_lstm: "Negatif",
    predicted_sentiment_cnn_probability: 0.88,
    predicted_sentiment_cnn_lstm_probability: 0.85,
    processed_text:
      "corporate csr programs often feel greenwashing rather genuine commitment social responsibility",
    project_id: "dummy-project-002",
    topic: "3",
    tweet_url: "https://twitter.com/user4/status/1234567898",
  },
  {
    _id: "sentiment_005",
    conversation_id_str: "1234567899001",
    full_text:
      "The SDGs provide an amazing framework for businesses to create meaningful impact while building sustainable operations.",
    id_str: "1234567899",
    in_reply_to_screen_name: undefined,
    predicted_sentiment_cnn: "Positif",
    predicted_sentiment_cnn_lstm: "Positif",
    predicted_sentiment_cnn_probability: 0.89,
    predicted_sentiment_cnn_lstm_probability: 0.93,
    processed_text:
      "sdgs provide amazing framework businesses create meaningful impact building sustainable operations",
    project_id: "dummy-project-003",
    topic: "4",
    tweet_url: "https://twitter.com/user5/status/1234567899",
  },
];

// Dummy Emotion Data - Social Business Context
export const DUMMY_EMOTION: Emotion = {
  total_data: 18750,
  emotion_percentage: {
    Anger: 10.0,
    Fear: 6.0,
    Joy: 36.0,
    Love: 30.0,
    Neutral: 8.0,
    Sad: 10.0,
  },
  emotion_percentage_by_topic: {
    Anger: 9.0,
    Fear: 5.6,
    Joy: 38.0,
    Love: 32.0,
    Neutral: 6.4,
    Sad: 9.0,
  },
  emotion: [], // Add missing emotion array property
};

export const DUMMY_EMOTION_TWEETS: TEmotion[] = [
  {
    _id: "emotion_001",
    conversation_id_str: "1234567898001",
    full_text:
      "I'm absolutely thrilled about the growth of social entrepreneurship and its potential to solve global challenges!",
    id_str: "1234567898",
    in_reply_to_screen_name: undefined,
    predicted_emotions_cnn: "Joy",
    predicted_emotions_bilstm: "Joy",
    predicted_emotions_cnn_probability: {
      Anger: 0.05,
      Fear: 0.03,
      Joy: 0.85,
      Love: 0.04,
      Neutral: 0.02,
      Sad: 0.01,
    },
    predicted_emotions_bilstm_probability: {
      Anger: 0.04,
      Fear: 0.02,
      Joy: 0.88,
      Love: 0.03,
      Neutral: 0.02,
      Sad: 0.01,
    },
    processed_text:
      "absolutely thrilled growth social entrepreneurship potential solve global challenges",
    projectId: "dummy-project-001",
    topic: "1",
    tweet_url: "https://twitter.com/user1/status/1234567898",
  },
  {
    _id: "emotion_002",
    conversation_id_str: "1234567899001",
    full_text:
      "I love seeing businesses that prioritize people and planet alongside profit. This gives me so much hope for the future!",
    id_str: "1234567899",
    in_reply_to_screen_name: undefined,
    predicted_emotions_cnn: "Love",
    predicted_emotions_bilstm: "Love",
    predicted_emotions_cnn_probability: {
      Anger: 0.02,
      Fear: 0.03,
      Joy: 0.15,
      Love: 0.75,
      Neutral: 0.03,
      Sad: 0.02,
    },
    predicted_emotions_bilstm_probability: {
      Anger: 0.01,
      Fear: 0.02,
      Joy: 0.18,
      Love: 0.77,
      Neutral: 0.01,
      Sad: 0.01,
    },
    processed_text:
      "love seeing businesses prioritize people planet alongside profit gives hope future",
    projectId: "dummy-project-002",
    topic: "3",
    tweet_url: "https://twitter.com/user2/status/1234567899",
  },
  {
    _id: "emotion_003",
    conversation_id_str: "1234567900001",
    full_text:
      "Worried about the slow progress in achieving SDGs. We need more urgent action from both governments and businesses.",
    id_str: "1234567900",
    in_reply_to_screen_name: undefined,
    predicted_emotions_cnn: "Fear",
    predicted_emotions_bilstm: "Fear",
    predicted_emotions_cnn_probability: {
      Anger: 0.15,
      Fear: 0.68,
      Joy: 0.02,
      Love: 0.01,
      Neutral: 0.12,
      Sad: 0.02,
    },
    predicted_emotions_bilstm_probability: {
      Anger: 0.12,
      Fear: 0.72,
      Joy: 0.01,
      Love: 0.01,
      Neutral: 0.13,
      Sad: 0.01,
    },
    processed_text:
      "worried slow progress achieving sdgs need urgent action governments businesses",
    projectId: "dummy-project-003",
    topic: "4",
    tweet_url: "https://twitter.com/user3/status/1234567900",
  },
  {
    _id: "emotion_004",
    conversation_id_str: "1234567901001",
    full_text:
      "It's frustrating when companies use social impact as a marketing gimmick without real commitment to change.",
    id_str: "1234567901",
    in_reply_to_screen_name: undefined,
    predicted_emotions_cnn: "Anger",
    predicted_emotions_bilstm: "Anger",
    predicted_emotions_cnn_probability: {
      Anger: 0.78,
      Fear: 0.08,
      Joy: 0.02,
      Love: 0.01,
      Neutral: 0.09,
      Sad: 0.02,
    },
    predicted_emotions_bilstm_probability: {
      Anger: 0.82,
      Fear: 0.06,
      Joy: 0.01,
      Love: 0.01,
      Neutral: 0.08,
      Sad: 0.02,
    },
    processed_text:
      "frustrating companies use social impact marketing gimmick without real commitment change",
    projectId: "dummy-project-002",
    topic: "3",
    tweet_url: "https://twitter.com/user4/status/1234567901",
  },
  {
    _id: "emotion_005",
    conversation_id_str: "1234567902001",
    full_text:
      "Saddened by the persistence of poverty despite decades of development efforts. We need more innovative approaches.",
    id_str: "1234567902",
    in_reply_to_screen_name: undefined,
    predicted_emotions_cnn: "Sad",
    predicted_emotions_bilstm: "Sad",
    predicted_emotions_cnn_probability: {
      Anger: 0.08,
      Fear: 0.12,
      Joy: 0.02,
      Love: 0.03,
      Neutral: 0.15,
      Sad: 0.6,
    },
    predicted_emotions_bilstm_probability: {
      Anger: 0.06,
      Fear: 0.1,
      Joy: 0.01,
      Love: 0.02,
      Neutral: 0.16,
      Sad: 0.65,
    },
    processed_text:
      "saddened persistence poverty despite decades development efforts need innovative approaches",
    projectId: "dummy-project-003",
    topic: "4",
    tweet_url: "https://twitter.com/user5/status/1234567902",
  },
];

// Dummy Buzzer Data - Social Business Influencers
export const DUMMY_BUZZERS: Buzzer[] = [
  {
    BEC: 0.85,
    BEC_Norm: 0.92,
    EVC: 0.78,
    topicId: 1,
    EVC_norm: 0.81,
    final_measure: 0.94,
    node: "social_impact_guru",
    projectId: "dummy-project-001",
    tweet_url: "https://twitter.com/social_impact_guru/status/1234567890",
  },
  {
    BEC: 0.72,
    BEC_Norm: 0.84,
    EVC: 0.69,
    topicId: 2,
    EVC_norm: 0.75,
    final_measure: 0.89,
    node: "sustainable_biz_leader",
    projectId: "dummy-project-002",
    tweet_url: "https://twitter.com/sustainable_biz_leader/status/1234567891",
  },
  {
    BEC: 0.68,
    BEC_Norm: 0.79,
    EVC: 0.71,
    topicId: 3,
    EVC_norm: 0.73,
    final_measure: 0.87,
    node: "impact_investor_pro",
    projectId: "dummy-project-001",
    tweet_url: "https://twitter.com/impact_investor_pro/status/1234567892",
  },
  {
    BEC: 0.76,
    BEC_Norm: 0.88,
    EVC: 0.74,
    topicId: 4,
    EVC_norm: 0.82,
    final_measure: 0.91,
    node: "sdg_champion",
    projectId: "dummy-project-003",
    tweet_url: "https://twitter.com/sdg_champion/status/1234567893",
  },
  {
    BEC: 0.71,
    BEC_Norm: 0.81,
    EVC: 0.66,
    topicId: 1,
    EVC_norm: 0.7,
    final_measure: 0.85,
    node: "bcorp_leader",
    projectId: "dummy-project-002",
    tweet_url: "https://twitter.com/bcorp_leader/status/1234567894",
  },
];

// Dummy Community Data - Social Business Ecosystem
export const DUMMY_COMMUNITY: Community = {
  nodes: [
    // Community 1: Social Entrepreneurs & Innovators
    {
      community: 1,
      id: "social_entrepreneurs",
      name: "Social Entrepreneurs Network",
      profile_url: "https://twitter.com/social_entrepreneurs",
      val: 45,
    },
    {
      community: 1,
      id: "social_innovators",
      name: "Social Innovation Hub",
      profile_url: "https://twitter.com/social_innovators",
      val: 29,
    },
    {
      community: 1,
      id: "impact_startups",
      name: "Impact Startups Coalition",
      profile_url: "https://twitter.com/impact_startups",
      val: 38,
    },
    {
      community: 1,
      id: "social_tech_pioneers",
      name: "Social Tech Pioneers",
      profile_url: "https://twitter.com/social_tech_pioneers",
      val: 32,
    },
    // Community 2: Impact Investors & Finance
    {
      community: 2,
      id: "impact_investors",
      name: "Impact Investors Circle",
      profile_url: "https://twitter.com/impact_investors",
      val: 67,
    },
    {
      community: 2,
      id: "social_finance_experts",
      name: "Social Finance Experts",
      profile_url: "https://twitter.com/social_finance_experts",
      val: 54,
    },
    {
      community: 2,
      id: "impact_funds",
      name: "Impact Investment Funds",
      profile_url: "https://twitter.com/impact_funds",
      val: 41,
    },
    {
      community: 2,
      id: "patient_capital",
      name: "Patient Capital Alliance",
      profile_url: "https://twitter.com/patient_capital",
      val: 36,
    },
    // Community 3: Corporate CSR & Sustainability
    {
      community: 3,
      id: "csr_professionals",
      name: "CSR & Sustainability Pros",
      profile_url: "https://twitter.com/csr_professionals",
      val: 38,
    },
    {
      community: 3,
      id: "sustainability_leaders",
      name: "Corporate Sustainability Leaders",
      profile_url: "https://twitter.com/sustainability_leaders",
      val: 43,
    },
    {
      community: 3,
      id: "esg_experts",
      name: "ESG Implementation Experts",
      profile_url: "https://twitter.com/esg_experts",
      val: 35,
    },
    {
      community: 3,
      id: "green_business",
      name: "Green Business Network",
      profile_url: "https://twitter.com/green_business",
      val: 31,
    },
    // Community 4: SDG & Development Organizations
    {
      community: 4,
      id: "sdg_advocates",
      name: "SDG Implementation Network",
      profile_url: "https://twitter.com/sdg_advocates",
      val: 52,
    },
    {
      community: 4,
      id: "development_orgs",
      name: "Development Organizations",
      profile_url: "https://twitter.com/development_orgs",
      val: 48,
    },
    {
      community: 4,
      id: "policy_makers",
      name: "Policy Makers for Impact",
      profile_url: "https://twitter.com/policy_makers",
      val: 39,
    },
    {
      community: 4,
      id: "un_partnerships",
      name: "UN Global Partnerships",
      profile_url: "https://twitter.com/un_partnerships",
      val: 44,
    },
  ],
  links: [
    // Community 1 - Internal connections
    {
      full_text:
        "Social entrepreneurs and innovators co-creating solutions for community development challenges.",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "social_innovators",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567893",
    },
    {
      full_text:
        "Social entrepreneurs collaborating with impact startups on sustainable business models.",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "impact_startups",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567905",
    },
    {
      full_text:
        "Social entrepreneurs partnering with tech pioneers for digital social innovation.",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "social_tech_pioneers",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567906",
    },
    {
      full_text:
        "Impact startups leveraging social technology to address poverty and inequality challenges.",
      source: "impact_startups",
      source_community: 1,
      target: "social_tech_pioneers",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/impact_startups/status/1234567895",
    },
    {
      full_text:
        "Social innovation hubs incubating impact startups with technology solutions.",
      source: "social_innovators",
      source_community: 1,
      target: "impact_startups",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/social_innovators/status/1234567907",
    },
    {
      full_text:
        "Social innovation hubs collaborating with tech pioneers on AI for social good.",
      source: "social_innovators",
      source_community: 1,
      target: "social_tech_pioneers",
      target_community: 1,
      topic: "1",
      url_tweet: "https://twitter.com/social_innovators/status/1234567908",
    },

    // Community 2 - Internal connections (all nodes connected to each other)
    {
      full_text:
        "Social finance experts and impact funds discussing blended finance mechanisms for development projects.",
      source: "social_finance_experts",
      source_community: 2,
      target: "impact_funds",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/social_finance_experts/status/1234567896",
    },
    {
      full_text:
        "Impact investors connecting with social finance experts for innovative funding strategies.",
      source: "impact_investors",
      source_community: 2,
      target: "social_finance_experts",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/impact_investors/status/1234567909",
    },
    {
      full_text:
        "Impact investors collaborating with impact funds on portfolio diversification.",
      source: "impact_investors",
      source_community: 2,
      target: "impact_funds",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/impact_investors/status/1234567910",
    },
    {
      full_text:
        "Patient capital alliance providing long-term funding for social ventures with sustainable impact.",
      source: "patient_capital",
      source_community: 2,
      target: "impact_investors",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/patient_capital/status/1234567897",
    },
    {
      full_text:
        "Patient capital working with social finance experts on innovative funding mechanisms.",
      source: "patient_capital",
      source_community: 2,
      target: "social_finance_experts",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/patient_capital/status/1234567911",
    },
    {
      full_text:
        "Patient capital partnering with impact funds for long-term sustainable investments.",
      source: "patient_capital",
      source_community: 2,
      target: "impact_funds",
      target_community: 2,
      topic: "2",
      url_tweet: "https://twitter.com/patient_capital/status/1234567912",
    },

    // Community 3 - Internal connections (all nodes connected to each other)
    {
      full_text:
        "Sustainability leaders and ESG experts collaborating on corporate impact measurement frameworks.",
      source: "sustainability_leaders",
      source_community: 3,
      target: "esg_experts",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/sustainability_leaders/status/1234567898",
    },
    {
      full_text:
        "CSR professionals working with sustainability leaders on comprehensive ESG strategies.",
      source: "csr_professionals",
      source_community: 3,
      target: "sustainability_leaders",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/csr_professionals/status/1234567913",
    },
    {
      full_text:
        "CSR professionals partnering with ESG experts for advanced reporting standards.",
      source: "csr_professionals",
      source_community: 3,
      target: "esg_experts",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/csr_professionals/status/1234567914",
    },
    {
      full_text:
        "Green business network sharing best practices for environmental and social corporate responsibility.",
      source: "green_business",
      source_community: 3,
      target: "csr_professionals",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/green_business/status/1234567899",
    },
    {
      full_text:
        "Green business network collaborating with sustainability leaders on eco-friendly initiatives.",
      source: "green_business",
      source_community: 3,
      target: "sustainability_leaders",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/green_business/status/1234567915",
    },
    {
      full_text:
        "Green business network working with ESG experts on environmental compliance standards.",
      source: "green_business",
      source_community: 3,
      target: "esg_experts",
      target_community: 3,
      topic: "3",
      url_tweet: "https://twitter.com/green_business/status/1234567916",
    },

    // Community 4 - Internal connections (all nodes connected to each other)
    {
      full_text:
        "Development organizations and policy makers aligning strategies for SDG implementation and monitoring.",
      source: "development_orgs",
      source_community: 4,
      target: "policy_makers",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/development_orgs/status/1234567900",
    },
    {
      full_text:
        "SDG advocates working with development organizations on global impact initiatives.",
      source: "sdg_advocates",
      source_community: 4,
      target: "development_orgs",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/sdg_advocates/status/1234567917",
    },
    {
      full_text:
        "SDG advocates collaborating with policy makers on sustainable development regulations.",
      source: "sdg_advocates",
      source_community: 4,
      target: "policy_makers",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/sdg_advocates/status/1234567918",
    },
    {
      full_text:
        "UN partnerships facilitating global cooperation on sustainable development and social impact initiatives.",
      source: "un_partnerships",
      source_community: 4,
      target: "sdg_advocates",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/un_partnerships/status/1234567901",
    },
    {
      full_text:
        "UN partnerships supporting development organizations in global sustainability projects.",
      source: "un_partnerships",
      source_community: 4,
      target: "development_orgs",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/un_partnerships/status/1234567919",
    },
    {
      full_text:
        "UN partnerships working with policy makers on international development frameworks.",
      source: "un_partnerships",
      source_community: 4,
      target: "policy_makers",
      target_community: 4,
      topic: "4",
      url_tweet: "https://twitter.com/un_partnerships/status/1234567920",
    },

    // Inter-community connections (Community 1 to all others)
    {
      full_text:
        "Exciting collaboration between social entrepreneurs and impact investors on scaling sustainable ventures!",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "impact_investors",
      target_community: 2,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567890",
    },
    {
      full_text:
        "Social entrepreneurs engaging with CSR professionals for corporate partnership opportunities.",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "csr_professionals",
      target_community: 3,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567921",
    },
    {
      full_text:
        "Social entrepreneurs working with SDG advocates to align business models with global goals.",
      source: "social_entrepreneurs",
      source_community: 1,
      target: "sdg_advocates",
      target_community: 4,
      topic: "1",
      url_tweet: "https://twitter.com/social_entrepreneurs/status/1234567922",
    },
    {
      full_text:
        "Social innovators connecting with social finance experts for funding innovation labs.",
      source: "social_innovators",
      source_community: 1,
      target: "social_finance_experts",
      target_community: 2,
      topic: "1",
      url_tweet: "https://twitter.com/social_innovators/status/1234567923",
    },
    {
      full_text:
        "Social tech pioneers connecting with sustainability leaders to develop green technology solutions.",
      source: "social_tech_pioneers",
      source_community: 1,
      target: "sustainability_leaders",
      target_community: 3,
      topic: "1",
      url_tweet: "https://twitter.com/social_tech_pioneers/status/1234567902",
    },
    {
      full_text:
        "Impact startups partnering with development organizations for market expansion in emerging economies.",
      source: "impact_startups",
      source_community: 1,
      target: "development_orgs",
      target_community: 4,
      topic: "1",
      url_tweet: "https://twitter.com/impact_startups/status/1234567924",
    },

    // Inter-community connections (Community 2 to others)
    {
      full_text:
        "Impact investors and CSR professionals discussing ESG metrics and social return frameworks.",
      source: "impact_investors",
      source_community: 2,
      target: "csr_professionals",
      target_community: 3,
      topic: "2",
      url_tweet: "https://twitter.com/impact_investors/status/1234567891",
    },
    {
      full_text:
        "Impact funds partnering with development organizations for scaling social impact in emerging markets.",
      source: "impact_funds",
      source_community: 2,
      target: "development_orgs",
      target_community: 4,
      topic: "2",
      url_tweet: "https://twitter.com/impact_funds/status/1234567903",
    },
    {
      full_text:
        "Social finance experts consulting with ESG experts on sustainable investment strategies.",
      source: "social_finance_experts",
      source_community: 2,
      target: "esg_experts",
      target_community: 3,
      topic: "2",
      url_tweet: "https://twitter.com/social_finance_experts/status/1234567925",
    },
    {
      full_text:
        "Patient capital supporting policy makers in developing long-term sustainable finance policies.",
      source: "patient_capital",
      source_community: 2,
      target: "policy_makers",
      target_community: 4,
      topic: "2",
      url_tweet: "https://twitter.com/patient_capital/status/1234567926",
    },

    // Inter-community connections (Community 3 to Community 4)
    {
      full_text:
        "CSR teams partnering with SDG advocates to implement sustainable development goals in corporate strategy.",
      source: "csr_professionals",
      source_community: 3,
      target: "sdg_advocates",
      target_community: 4,
      topic: "3",
      url_tweet: "https://twitter.com/csr_professionals/status/1234567892",
    },
    {
      full_text:
        "Sustainability leaders working with UN partnerships on global corporate sustainability initiatives.",
      source: "sustainability_leaders",
      source_community: 3,
      target: "un_partnerships",
      target_community: 4,
      topic: "3",
      url_tweet: "https://twitter.com/sustainability_leaders/status/1234567927",
    },
    {
      full_text:
        "ESG experts collaborating with development organizations on impact measurement standards.",
      source: "esg_experts",
      source_community: 3,
      target: "development_orgs",
      target_community: 4,
      topic: "3",
      url_tweet: "https://twitter.com/esg_experts/status/1234567928",
    },
    {
      full_text:
        "Green business network supporting policy makers in environmental regulation development.",
      source: "green_business",
      source_community: 3,
      target: "policy_makers",
      target_community: 4,
      topic: "3",
      url_tweet: "https://twitter.com/green_business/status/1234567929",
    },

    // Additional cross-connections for complete network coverage
    {
      full_text:
        "SDG advocates working with social innovation hubs to develop scalable impact measurement tools.",
      source: "sdg_advocates",
      source_community: 4,
      target: "social_innovators",
      target_community: 1,
      topic: "4",
      url_tweet: "https://twitter.com/sdg_advocates/status/1234567894",
    },
    {
      full_text:
        "Policy makers engaging with impact startups to create supportive regulatory frameworks for social innovation.",
      source: "policy_makers",
      source_community: 4,
      target: "impact_startups",
      target_community: 1,
      topic: "4",
      url_tweet: "https://twitter.com/policy_makers/status/1234567904",
    },
    {
      full_text:
        "Development organizations partnering with social tech pioneers for digital development solutions.",
      source: "development_orgs",
      source_community: 4,
      target: "social_tech_pioneers",
      target_community: 1,
      topic: "4",
      url_tweet: "https://twitter.com/development_orgs/status/1234567930",
    },
    {
      full_text:
        "UN partnerships collaborating with social entrepreneurs on global social innovation networks.",
      source: "un_partnerships",
      source_community: 4,
      target: "social_entrepreneurs",
      target_community: 1,
      topic: "4",
      url_tweet: "https://twitter.com/un_partnerships/status/1234567931",
    },
  ],
};

// Dummy Chatbot Prompts - Social Business Context
export const DUMMY_CHATBOT_PROMPTS: ChatbotPromptTopics = {
  "Topic 1": {
    pertanyaan1: {
      pertanyaan: "What are the main trends in social entrepreneurship?",
      optimal_prompt:
        "Analyze the key trends and developments in social entrepreneurship based on social media discussions, including emerging business models and impact areas.",
    },
    pertanyaan2: {
      pertanyaan:
        "How is the social entrepreneurship community responding to funding challenges?",
      optimal_prompt:
        "Examine discussions about funding challenges faced by social enterprises and the community's proposed solutions and strategies.",
    },
    pertanyaan3: {
      pertanyaan: "What impact metrics are most discussed for social ventures?",
      optimal_prompt:
        "Identify and analyze the most frequently mentioned social impact measurement frameworks and metrics in the discourse.",
    },
  },
  "Topic 2": {
    pertanyaan1: {
      pertanyaan: "How do people perceive impact investing returns?",
      optimal_prompt:
        "Analyze public sentiment and perceptions regarding financial and social returns from impact investments based on social media data.",
    },
    pertanyaan2: {
      pertanyaan: "What are the barriers to scaling impact investments?",
      optimal_prompt:
        "Examine discussions about challenges and obstacles in scaling impact investing initiatives and proposed solutions.",
    },
    pertanyaan3: {
      pertanyaan: "Which impact investing models show the most promise?",
      optimal_prompt:
        "Evaluate different impact investing approaches and their effectiveness based on community discussions and sentiment analysis.",
    },
  },
  "Topic 3": {
    pertanyaan1: {
      pertanyaan: "How authentic do people find current CSR initiatives?",
      optimal_prompt:
        "Analyze public perception of corporate social responsibility initiatives, focusing on authenticity and effectiveness concerns.",
    },
    pertanyaan2: {
      pertanyaan: "What ESG practices generate the most positive discussion?",
      optimal_prompt:
        "Identify ESG (Environmental, Social, Governance) practices that receive the most positive sentiment in social media discussions.",
    },
    pertanyaan3: {
      pertanyaan: "How do consumers respond to sustainable business practices?",
      optimal_prompt:
        "Examine consumer sentiment and engagement with companies that prioritize sustainability and social responsibility.",
    },
  },
  "Topic 4": {
    pertanyaan1: {
      pertanyaan:
        "Which SDGs are getting the most attention in business discussions?",
      optimal_prompt:
        "Analyze which Sustainable Development Goals are most frequently discussed in business and social media contexts.",
    },
    pertanyaan2: {
      pertanyaan: "How do businesses view SDG implementation challenges?",
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
      pertanyaan:
        "What specific social business models are gaining the most traction?",
      prompt_pertanyaan:
        "What specific social business models are gaining the most traction?",
    },
    {
      pertanyaan:
        "How do investors evaluate social impact alongside financial returns?",
      prompt_pertanyaan:
        "How do investors evaluate social impact alongside financial returns?",
    },
    {
      pertanyaan:
        "What are the main challenges facing social enterprises in scaling their impact?",
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
    return DUMMY_TWEET_TOPICS.slice(0, 15);
  }

  static getSentimentByProject(projectId: string): Sentiment {
    // Create a copy with the sentiment array populated
    return {
      ...DUMMY_SENTIMENT,
      sentiment: DUMMY_SENTIMENT_TWEETS,
    };
  }

  static getSentimentTweetsByProject(projectId: string): TSentiment[] {
    const topics = this.getTopicsByProject(projectId);
    return DUMMY_SENTIMENT_TWEETS.filter((s) =>
      topics.some((t) => t.topicId.toString() === s.topic)
    );
  }

  static getEmotionByProject(projectId: string): Emotion {
    // Create a copy with the emotion array populated
    return {
      ...DUMMY_EMOTION,
      emotion: DUMMY_EMOTION_TWEETS,
    };
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
    let response = { ...DUMMY_CHATBOT_RESPONSE };

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

  static createProject(projectData: {
    title: string;
    description: string;
    category: string;
    keyword: string;
    language: string;
    start_date_crawl: string;
    end_date_crawl: string;
  }): Project {
    const newProject: Project = {
      _id: `dummy-project-${Date.now()}`,
      title: projectData.title,
      description: projectData.description,
      topic_category: projectData.category,
      keyword: projectData.keyword,
      language: projectData.language,
      start_date_crawl: projectData.start_date_crawl,
      end_date_crawl: projectData.end_date_crawl,
    };

    // Add to dummy projects array
    DUMMY_PROJECTS.push(newProject);

    return newProject;
  }

  static deleteProject(id: string): boolean {
    const index = DUMMY_PROJECTS.findIndex((p) => p._id === id);
    if (index > -1) {
      DUMMY_PROJECTS.splice(index, 1);
      return true;
    }
    return false;
  }
}
