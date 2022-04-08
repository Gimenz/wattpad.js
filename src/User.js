const Authentication = require("./Authentication");

class User extends Authentication {
    /**
     * Lookup user by username
     * @param {string} username 
     * @returns 
     */
    async lookup(username) {
        const params = {
            fields: 'username,description,avatar,name,email,genderCode,language,birthdate,verified,isPrivate,ambassador,is_staff,follower,following,backgroundUrl,votesReceived,numFollowing,numFollowers,createDate,followerRequest,website,facebook,twitter,followingRequest,numStoriesPublished,numLists,location,externalId,programs,showSocialNetwork,verified_email,has_accepted_latest_tos,highlight_colour,isBlockedByCurrentUser'
        }

        const res = await this.makeRequest('api_v3', 'users/' + username, params)

        return await res.json()
    }
}

module.exports = User;