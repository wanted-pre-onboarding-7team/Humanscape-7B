interface IResponse {
  header: IHeader;
  body: IBody;
}

interface IHeader {
  resultCode: string;
  resultMsg: string;
}

interface IBody {
  items: IItems;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

interface IItems {
  item?: IItem[];
}

export interface IItem {
  sickCd: string;
  sickNm: string;
}

export interface IDiseaseAPIRes {
  response: IResponse;
}
