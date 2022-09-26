const React = require('react')
const Default = require('./layouts/default')

function Error() {
    return (
        <Default>
            <h2>404 Error Page</h2>
        </Default>
    )
}

module.exports = Error