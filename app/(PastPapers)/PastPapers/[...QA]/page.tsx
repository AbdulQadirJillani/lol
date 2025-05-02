import Format from "@/app/_QAFormat/Format"
import { redirect } from "next/navigation"

type Props = {
  QA: string[]
}

type Data = {
  id: number,
  info: string|string[],
  question: string,
  answers: { option: string, bool: boolean }[]
}[]

const page = async({ params }: { params: Promise<Props> }) => {
  let data: Data
  try {
    const { QA } = await params
    const annual = QA[0]
    const[module, year] = QA[1].split('-')
    const promisedData = await import(`../../../../Database/PastPapers/${annual}/${module}/${module}-${year}.jsx`)
    data = await promisedData.default
  }
  catch {
    redirect("/")
  }

  return (
    <Format data={data}/>
  )
}

export default page