import constants from '../constants'
import turbo from 'turbo360'
import myUtils from '../utils/myUtils'
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
export default {

   fetchFeeds: (params) => {
      return dispatch => {
         return dispatch(myUtils.getRequest('feed', params, constants.FEEDS_RECEIVED))
      }
   },

   createFeed: (params) => {
      return dispatch => {
         return dispatch(myUtils.postRequest('feed', params, constants.FEED_CREATED))
      }
   },

   // // Unlike addUser, register() also maintains a session for login state. After calling 
   // // TurboClient.createUser(), the new user is logged in as well:
   // register: (params) => {
   //    return dispatch => {
   //       return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
   //    }
   // },

   // loginUser: (credentials) => {
   //    return dispatch => {
   //       return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
   //    }
   // },

   // currentUser: () => {
   //    return dispatch => {
   //       return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
   //    }
   // }

}
