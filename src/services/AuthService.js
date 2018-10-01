import Api from '@/services/Api'

// services to get auth API
export default {
    getUserDetail (publicAddress) {
        return Api().get(`users/${publicAddress}`)
    },

    registerUser (publicAddress) {
        return Api().post(`users`, {
            publicAddress: publicAddress
        })
    },

    authenticate (publicAddress, signature) {
        return Api().post(`auth`, {
            publicAddress: publicAddress,
            signature: signature
        })
    }
}