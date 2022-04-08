const Request = require('./config/Request');

class Authentication extends Request {
    /**
     * Login
     * @param {string} username 
     * @param {string} password 
     * @returns 
     */
    async login(username, password) {
        const params = {
            'type': 'wattpad',
            'username': username,
            'password': password,
            fields: 'token,ga,user(username,description,avatar,name,email,genderCode,language,birthdate,verified,isPrivate,ambassador,is_staff,follower,following,backgroundUrl,votesReceived,numFollowing,numFollowers,createDate,followerRequest,website,facebook,twitter,followingRequest,numStoriesPublished,numLists,location,externalId,programs,showSocialNetwork,verified_email,has_accepted_latest_tos,language,inbox(unread),has_password,connectedServices)'
        }

        const res = await this.makeRequest('api_v4', 'sessions', params, {
            method: 'POST'
        })

        return await res.json();
    }
}

module.exports = Authentication;