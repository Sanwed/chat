export interface MessageInterface {
  id: string,
  from: {
    name: string
  },
  type: 'response' | 'message' | 'typing',
  time: string,
  text?: string
}
