import { DictionaryResource } from '../types'

export const DICTIONARY_LIST: DictionaryResource[] = [
  {
    id: 'my-custom-list',
    name: '我的私房詞庫',
    description: '這是我自己上傳的單字表',
    category: '自定義',
    tags: ['個人'],
    url: '/dicts/my-list.json',
    length: 2,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'cet4',
    name: 'CET-4',
    description: '大学英语四级词汇',
    category: '中国考试',
    tags: ['核心'],
    url: '/dicts/CET4_T.json',
    length: 3739,
    language: 'en',
    languageCategory: 'en',
  },
]
