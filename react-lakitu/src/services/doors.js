import api from 'src/services/api'

export default class Doors {
    listDoors() {
        let url = `/doors`

        if (!apiToken) { return }

        api.get(url, fetchOptions)
            .then(() => {
                let doors = this.mapToList(json, function(door) { return door.door })
                this.apiTokenValid('valid')
                this.setState({ doors: doors })
            })
            .catch(() => {
                this.apiTokenValid('invalid')
                console.error(url, status, err.toString())
                Materialize.toast( 'Failed to door information.', 3000);
            });
    }

    lockDoor(door) {

    }
}