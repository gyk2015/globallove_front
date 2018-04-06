import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Base from '@/components/Base'
import Index from '@/components/Index/Index'
import Home from '@/components/Home/Home'
import PersonalData from '@/components/Home/PersonalData'
import FamilyInfo from '@/components/Home/FamilyInfo'
import LifeHabit from '@/components/Home/LifeHabit'
import Emotional from '@/components/Home/Emotional'
import Photo from '@/components/Home/Photo'
import PhotoContent from '@/components/Home/PhotoContent'
import Mood from '@/components/Home/Mood'
import Activity from '@/components/Home/Activity'
import ActiveCenter from '@/components/ActiveCenter/ActiveCenter'
import ActiveDetail from '@/components/ActiveCenter/ActiveDetail'
import ActiveEnroll from '@/components/ActiveCenter/ActiveEnroll'
import News from '@/components/News/News'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import Regist from '@/components/Login/Regist'
import Authentication from '@/components/Home/Authentication'
import Email from '@/components/Home/Email'
import Mate from '@/components/Home/Mate'
import MyFriend from '@/components/Home/MyFriend'
import Other from '@/components/Other/Other'
import OtherPersonalData from '@/components/Other/PersonalData'
import OtherFamilyInfo from '@/components/Other/FamilyInfo'
import OtherLifeHabit from '@/components/Other/LifeHabit'
import OtherEmotional from '@/components/Other/Emotional'
import OtherPhoto from '@/components/Other/Photo'
import OtherActivity from '@/components/Other/Activity'
import OtherMood from '@/components/Other/Mood'
Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'Login',
      		component: Login
    	},
      {
          path: '/regist',
          name: 'Regist',
          component: Regist
      },
    	{
    		path: '/base',
      		name: 'Base',
      		component: Base,
      		children: [
		        {
		          path: 'index',
		          name: 'Index',
		          component: Index
		        },
            {
              path: 'home',
              name: 'home',
              component: Home,
              children: [
                {
                  path: 'personalData',
                  name: 'personalData',
                  component: PersonalData
                },
                {
                  path: 'familyInfo',
                  name: 'familyInfo',
                  component: FamilyInfo
                },
                {
                  path: 'lifeHabit',
                  name: 'lifeHabit',
                  component: LifeHabit
                },
                {
                  path: 'emotional',
                  name: 'emotional',
                  component: Emotional
                },
                {
                  path: 'photo',
                  name: 'photo',
                  component: Photo,
                },
                {
                  path: 'photoContent',
                  name: 'photoContent',
                  component: PhotoContent
                },
                {
                  path: 'mood',
                  name: 'mood',
                  component: Mood
                },
                {
                  path: 'activity',
                  name: 'activity',
                  component: Activity
                },
                {
                  path: 'authentication',
                  name: 'authentication',
                  component: Authentication
                },
                {
                  path: 'email',
                  name: 'email',
                  component: Email
                },
                {
                  path: 'mate',
                  name: 'mate',
                  component: Mate
                },
                {
                  path: 'myfriend',
                  name: 'myfriend',
                  component: MyFriend
                }
              ]
            },
            {
              path: 'activeCenter',
              name: 'activeCenter',
              component: ActiveCenter
            },
            {
              path: 'activeDetail',
              name: 'activeDetail',
              component: ActiveDetail
            },
            {
              path: 'activeEnroll',
              name: 'activeEnroll',
              component: ActiveEnroll
            },
            {
              path: 'news',
              name: 'news',
              component: News
            },
            {
              path: 'newsList',
              name: 'newsList',
              component: NewsList
            },
            {
              path: 'newsDetail',
              name: 'newsDetail',
              component: NewsDetail
            },
            {
              path: 'other',
              name: 'other',
              component: Other,
              children: [
                {
                  path: 'personalData',
                  name: 'personalData',
                  component: OtherPersonalData
                },
                {

                  path: 'familyInfo',
                  name: 'familyInfo',
                  component: OtherFamilyInfo
                },
                {
                  path: 'lifeHabit',
                  name: 'lifeHabit',
                  component: OtherLifeHabit
                },
                {
                  path: 'emotional',
                  name: 'emotional',
                  component: OtherEmotional
                },
                {
                  path: 'photo',
                  name: 'photo',
                  component: OtherPhoto
                },
                {
                  path: 'activity',
                  name: 'activity',
                  component: OtherActivity
                },
                {
                  path: 'mood',
                  name: 'mood',
                  component: OtherMood
                },
              ]
            }
		    ]
    	}
  	]
})
