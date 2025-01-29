import { createFileRoute } from '@tanstack/react-router'
import Task from '../component/Task'

export const Route = createFileRoute('/task/$taskid')({
  component: Task,
})
