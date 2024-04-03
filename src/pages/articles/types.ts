interface IMediaMetadata {
  url: string
  format: string
  height: number
  width: number
}

interface IMedia {
  type: string
  subtype: string
  caption: string
  copyright: string
  approved_for_syndication: number
  'media-metadata': IMediaMetadata[]
}
export interface IArticle {
  id: number
  title: string
  abstract: string
  pub_date: string
  published_date: string
  media: IMedia[]
}

export interface IUseArticles {
  isError: boolean
  isLoading: boolean
  articles: IArticle[]
}
