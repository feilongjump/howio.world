interface HumansTime {
  humans?: string
  datetime: string
}
interface Content {
  body: string
  markdown: string
}

export interface Post {
  id: number
  title: string
  published_at: HumansTime
  content: Content
}

export interface Posts {
  id: number
  title: string
  published_at: HumansTime
}

export interface SavePost {
  id?: number
  title: string
  published_at: string
  content: Content
}
