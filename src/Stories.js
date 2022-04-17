const Request = require('./config/Request');
const parser = require('node-html-parser');

class Stories extends Request {
    /**
     * search wattpad stories
     * @param {string} query ?
     * @param {number} limit result limit
     * @param {number} offset 
     * @param {boolean} mature mature content ? 
     * @param {number} language idk for this, but for indonesian is 20
     */
    async search(query, limit = 20, offset = 0, mature = true, language = '20') {
        const params = {
            query,
            limit,
            offset,
            language,
            mature,
            fields: 'stories(id,title,voteCount,readCount,commentCount,description,completed,mature,cover,url,isPaywalled,length,language(id),user(name),numParts,lastPublishedPart(createDate),promoted,sponsor(name,avatar),tags,tracking(clickUrl,impressionUrl,thirdParty(impressionUrls,clickUrls)),contest(endDate,ctaLabel,ctaURL)),total,tags,nexturl'
        }
        const res = await this.makeRequest('api_v4', 'search/stories', params)
        return await res.json();
    }

    /**
     * this used to handle nextUrl
     * @param {string} url 
     * @returns 
     */
    nextHandler = async (url) => {
        return await this.get(url);
    }

    /**
     * get detail about the stories
     * @param {string|number} id story id
     * @returns 
     */
    async detail(id) {
        const res = await this.makeRequest('api_v3', 'stories/' + id + '/', {
            fields: 'id,title,length,createDate,modifyDate,voteCount,readCount,commentCount,promoted,sponsor,language,user,description,cover,highlight_colour,completed,isPaywalled,categories,numParts,readingPosition,deleted,dateAdded,lastPublishedPart(createDate),tags,copyright,rating,story_text_url(text),,parts(id,title,voteCount,commentCount,videoId,readCount,photoUrl,modifyDate,length,voted,deleted,text_url(text),dedication)'
        })
        return await res.json()
    }

    /**
     * 
     * @param {string} id story part id
     * @returns 
     */
    async viewParts(id) {
        const res = await this.makeRequest('api_v4', 'parts/' + id, {
            fields: 'id,title,url,modifyDate,wordCount,photoUrl,commentCount,voteCount,readCount,voted,pages,text_url,rating,group(id,title,cover,url,user(username,name,avatar,twitter,authorMessage),rating,parts(title,url,id)),source(url,label)'
        })
        return await res.json()
    }

    /**
     * get text of the part stories
     * @param {string} id story part id
     * @returns 
     */
    async read(id) {
        const res = await this.makeRequest('api_v2', 'storytext', {
            'id': id,
            'include_paragraph_id': '1',
            'output': 'json'
        })

        const json = await res.json()
        const clean = parser.parse(json.text).textContent;
        return {
            text: clean,
            text_hash: json.text_hash
        }
    }
}
module.exports = Stories;