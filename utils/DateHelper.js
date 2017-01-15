import moment from 'moment'

export default {
    formatDate: (date) => {
        return moment(date).add(1, 'day').format('MM/DD/YYYY')
    }
}