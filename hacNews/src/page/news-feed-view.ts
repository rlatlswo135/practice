import View from '../core/view'
import {NewsFeed,NewsStore} from '../types'
import {NewsFeedApi} from '../core/api'
import {NEWS_URL} from '../config'

export default class NewsFeedView extends View {
    private api: NewsFeedApi;
    private store:NewsStore;
    
    constructor(containerId: string , store:NewsStore) {
      let template: string = `
        <div class="bg-gray-600 min-h-screen">
          <div class="bg-white text-xl">
            <div class="mx-auto px-4">
              <div class="flex justify-between items-center py-6">
                <div class="flex justify-start">
                  <h1 class="font-extrabold">Hacker News</h1>
                </div>
                <div class="items-center justify-end">
                  <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                    Previous
                  </a>
                  <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                    Next
                  </a>
                </div>
              </div> 
            </div>
          </div>
          <div class="p-4 text-2xl text-gray-700">
            {{__news_feed__}}        
          </div>
        </div>
      `;
  
      super(containerId, template);
      this.store = store
  
      this.api = new NewsFeedApi(NEWS_URL.replace('@currentPage',String(this.store.currentPage)));
    
      if (!this.store.hasFeeds) {
        //비엇을때 api받은걸 가지고 setFeed
        this.store.setFeeds(this.api.getData())
      }
    }
    
    render(): void {
      const current = location.hash.substr(7)
      //요청시마다 원래페이지또받아오니까 에바네 => 뭔가안되서 로직추가해서 기능되게함
      if(current.length !== 0 && this.store.currentPage !== Number(current)){
        this.store.currentPage = Number(current)
        this.api.setNewUrl(NEWS_URL.replace('@currentPage',String(this.store.currentPage)))
        this.store.setFeeds(this.api.getData())
      }else{
        console.log('목록으로')
      }
      for(let news of this.store.getAllFeeds()) {
        const { id, title, comments_count, user, points, time_ago, read } = news
        this.addHtml(`
          <div class="p-6 ${read ? 'bg-gray-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
            <div class="flex">
              <div class="flex-auto">
                <a href="#/show/${id}">${title}</a>  
              </div>
              <div class="text-center text-sm">
                <div class="w-10 text-white bg-green -300 rounded-lg px-0 py-2">${comments_count}</div>
              </div>
            </div>
            <div class="flex mt-3">
              <div class="grid grid-cols-3 text-sm text-gray-500">
                <div><i class="fas fa-user mr-1"></i>${user}</div>
                <div><i class="fas fa-heart mr-1"></i>${points}</div>
                <div><i class="far fa-clock mr-1"></i>${time_ago}</div>
              </div>  
            </div>
          </div>    
        `);
      }
    
      this.setTemplateData('news_feed', this.getHtml());
      this.setTemplateData('prev_page', String(this.store.prevPage));
      this.setTemplateData('next_page', String(this.store.nextPage));
    
      this.updateView();  
    }
  }