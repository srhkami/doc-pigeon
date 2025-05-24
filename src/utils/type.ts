export type ApiKeywordForm = {
  keyword: string,
}

export type DataOrderList = Array<{
  text: string,
  param: {
    ordering?: string,
    review?: string,
    accredit_status?: string,
    community_join_at__isnull?: string,
    mode?: 'new',
  }
}>