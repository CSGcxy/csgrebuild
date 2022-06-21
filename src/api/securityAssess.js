import request from "@/utils/request";
let base = 'csg/safetyAssessment'
export default {
    getSegAssessScore() {
        return request({
            url: base + '/getSegAssessScore',
            method: 'get'
        })
    },
    getTerminalTotalRateScore(pageNum, pageSize) {
        return request({
            url: base + '/getTerminalTotalRateScore/' + pageNum + '/' + pageSize,
            method: 'get'
        })
    },
    getTypeScore() {
        return request({
            url: base + '/getExplicitScore/',
            method: 'get'
        })
    },
    getOnlineIPScore() {
        return request({
            url: base + '/getOnlineIPScore/',
            method: 'get'
        })
    },
    getOnlineNIPScore() {
        return request({
            url: base + '/getOnlineNIPScore/',
            method: 'get'
        })
    },
    getPackageScore() {
        return request({
            url: base + '/getPackageScore/',
            method: 'get'
        })
    },

}
