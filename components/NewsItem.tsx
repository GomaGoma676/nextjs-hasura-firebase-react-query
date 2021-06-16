import { VFC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { setEditedNews } from '../slices/uiSlice'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useAppMutate } from '../hooks/useAppMutate'
import { News } from '../types/types'

interface Props {
  news: News
}

const NewsItem: VFC<Props> = ({ news }) => {
  const dispatch = useDispatch()
  const { deleteNewsMutation } = useAppMutate()

  if (deleteNewsMutation.isLoading) {
    return <p>Deleting...</p>
  }
  if (deleteNewsMutation.error) {
    return <p>Error</p>
  }
  return (
    <li className="my-3">
      <span className="font-bold">{news.content}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedNews({
                id: news.id,
                content: news.content,
              })
            )
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteNewsMutation.mutate(news.id)
          }}
        />
      </div>
    </li>
  )
}
export const NewsItemMemo = memo(NewsItem)
