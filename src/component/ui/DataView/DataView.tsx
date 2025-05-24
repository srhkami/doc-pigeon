import type {ReactNode} from "react";
import DataViewBody from "./DataViewBody.tsx";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {ApiKeywordForm, DataOrderList} from "../../../utils/type.ts";
import {IoMdArrowDropdown} from "react-icons/io";
import PageButtons from "../PageButtons.tsx";

type Props = {
  readonly top?: ReactNode, // 在主體更上方的頂部組件
  readonly float?: ReactNode, // 懸浮在頁面上的組件
  readonly header?: ReactNode, // 標題文字或組件
  readonly placeholder?: string, // 搜尋組件的預設文字
  readonly orderList: DataOrderList, // 排序篩選方式，物件類別如左
  readonly pageOption: {count: number, show:number} // 總頁數，從API獲取，為一個State、顯示的頁碼數量
  readonly children: ReactNode, // 主體內的列表或表格
}

/* 顯示資料的通用組件 */
function DataView({
                    top,
                    float,
                    header,
                    placeholder = '搜尋關鍵字',
                    orderList,
                    pageOption,
                    children,
                  }: Props) {

  const navigate = useNavigate();
  const {page} = useParams(); // 頁數
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);   // 解析params，轉換為物件
  const path = useLocation().pathname.replace(`/${page}`, ""); // 取得基礎網址


  const {register, handleSubmit, reset} = useForm<ApiKeywordForm>();

  // 關鍵字搜尋
  const handleSearch: SubmitHandler<ApiKeywordForm> = (formData) => {
    const keyword = formData.keyword;
    const newParams = new URLSearchParams({...params, search: keyword,}); // 將現有params與搜尋關鍵字param結合
    navigate(`${path}/1?${newParams.toString()}`); // 轉化為網址
  }

  // 經由排序清單繪製下拉選單組件
  const orderItems = orderList.map(item => {
    const newParams = new URLSearchParams({...params, ...item.param}); // 將現有params與項目本身傳入的param結合
    return (
      <li key={item.text} onClick={() => {
        navigate(`${path}/1?${newParams.toString()}`);
        reset();
      }}>
        <a>
          {item.text}
        </a>
      </li>
    )
  })

  return (
    <>
      {top}
      <div className='border rounded-2xl overflow-hidden'>
        <div className='flex flex-col md:flex-row px-5 py-3'>
          <div className='w-full md:w-1/2'>
            {header}
          </div>
          <div className='w-full md:w-1/2 flex justify-end'>
            <form onSubmit={handleSubmit(handleSearch)}>
              <input type="text" placeholder={placeholder} className="input input-sm"
                     {...register('keyword')}/>
            </form>
            <div className="dropdown dropdown-end ml-2">
              <div tabIndex={0} role="button" className="btn btn-sm flex items-center">
                <span>排序/篩選</span>
                <IoMdArrowDropdown/>
              </div >
              <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                {orderItems}
              </ul>
            </div>
          </div>
        </div>
        {children}
        <div className='flex justify-center my-3'>
          <PageButtons pageCount={pageOption.count} showPages={pageOption.show}/>
        </div>
      </div>
      {float &&
        <div className='sticky bottom-3 mt-3 '>
          <div className='flex justify-end'>
            {float}
          </div>
        </div>
      }
    </>
  )
}

DataView.Body = DataViewBody;

export default DataView;