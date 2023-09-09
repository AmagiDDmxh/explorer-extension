export type Explanation = {
  content: string
  desc: string
  func: string
}

export type Vulnerability = {
  content: string
  score: number
}

export type ContractData = {
  explanation: Explanation[]
  vulnerability: Vulnerability[]
}
