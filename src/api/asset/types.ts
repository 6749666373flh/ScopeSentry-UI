export type AssetData = {
  ID: string
  Host: string
  IP: string
  Port: number
  Service: string
  Title: string
  Status: number
  header: string
  Products: string[]
  Time: String
}

export type AssetStatistics = {
  Port: { value: number; number: number }[]
  Service: { value: string; number: number }[]
  Product: { value: string; number: number }[]
  Icon: { value: string; number: number; icon_hash: string }[]
}

export type AssetDetail = {
  ID: string
  Domain: string
  IP: string
  URL: string
  Port: number
  Title: string
  Status: number
  FaviconHash: string
  Jarm: string
  Time: String
  Products: string[]
  Service: string
  TLSData: string
  Hash: string
  ResponseHeaders: string
  ResponseBody: string
}

export type SubdomainData = {
  ID: string
  Domain: string
  RecordType: string
  RecordValue: string[]
  IP: string[]
  Time: string
}

export type URLData = {
  ID: string
  URL: string
  Source: string
  Type: string
  Input: string
  Time: string
}

export type CrawlerData = {
  ID: string
  Method: string
  URL: string
  GetParameter: string
  PostParameter: string
  Time: string
}

export type SensitiveData = {
  ID: string
  Info: string
  Name: string
  URL: String
  Time: string
}

export type DirScanData = {
  ID: string
  URL: string
  Title: string
  Status: String
  Length: string
  Time: string
}

export type PageMonitoringData = {
  ID: string
  URL: string
  OldResponseBodyMD5: string
  CurrentResponseBodyMD5: String
  Time: string
}
