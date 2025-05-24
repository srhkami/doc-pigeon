import {Button} from "../ui/Button.tsx";
import Alert from "../ui/Alert.tsx";
import DataView from "../ui/DataView/DataView.tsx";
import type {DataOrderList} from "../../utils/type.ts";


export default function TestPage() {

  // 排序清單
  const orderList: DataOrderList = [
    {text: '日期（新到舊)', param: {ordering: '-date'}},
    {text: '日期（舊到新)', param: {ordering: 'date'}},
    {text: '最近異動', param: {ordering: '-updated_at'}},
  ]

  return (
    <DataView
      float={<Button color='info'>懸浮按鈕</Button>}
      orderList={orderList}
      pageOption={{count: 5, show: 2}}
    >
      <DataView.Body>
        <Button color='error' size='sm' className='ml-2'>測試</Button>
        <Alert color='info'>測試</Alert>
      </DataView.Body>
    </DataView>
  )
}