import {NewsFeed,NewsDetail}from '../types/index'


export class Api {
    ajax: XMLHttpRequest;
    url: string;
  
    constructor(url: string) {
      this.ajax = new XMLHttpRequest();
      this.url = url;
    }
  
    getRequest<AjaxResponse>(): AjaxResponse {
      this.ajax.open('GET', this.url, false);
      this.ajax.send();
  
      return JSON.parse(this.ajax.response);
    }

    setNewUrl(newUrl:string):void{
      this.url = newUrl
    }
  }
  
export class NewsFeedApi extends Api {
    getData(): NewsFeed[] {
      return this.getRequest<NewsFeed[]>();
    }
  }
  
export class NewsDetailApi extends Api {
    getData(): NewsDetail {
      return this.getRequest<NewsDetail>();
    }
  }

  //잔디 테스트