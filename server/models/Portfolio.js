import mongoose from 'mongoose'

// ── Sub-schemas ───────────────────────────────────────────────────────────────
const StatSchema = new mongoose.Schema(
  { value: String, label: String },
  { _id: false }
)

const BioCardSchema = new mongoose.Schema(
  { title: String, text: String },
  { _id: false }
)

const AboutSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroTagline: String,
    heroBio: String,
    heroTags: [String],
    linkedinUrl: String,
    githubUrl: String,
    stats: [StatSchema],
    bioCards: [BioCardSchema],
  },
  { _id: false }
)

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tags: [String],
    link: String,
    imageKey: String,
    imageUrl: String,
  },
  { _id: false }
)

const StackItemSchema = new mongoose.Schema(
  {
    name: String,
    iconKey: String,
    iconUrl: String,
    level: Number,
  },
  { _id: false }
)

const StackGroupSchema = new mongoose.Schema(
  {
    label: String,
    stacks: [StackItemSchema],
  },
  { _id: false }
)

const ArticleSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    excerpt: String,
    date: String,
    category: String,
    readingTime: String,
    link: String,
  },
  { _id: false }
)

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    email: String,
    phone: String,
    location: String,
    githubUrl: String,
    linkedinUrl: String,
  },
  { _id: false }
)

// ── Schema principal ──────────────────────────────────────────────────────────
const PortfolioSchema = new mongoose.Schema(
  {
    about: AboutSchema,
    projects: [ProjectSchema],
    stacks: [StackGroupSchema],
    articles: [ArticleSchema],
    contact: ContactSchema,
  },
  { timestamps: true }
)

export default mongoose.model('Portfolio', PortfolioSchema)
