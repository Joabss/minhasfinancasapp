import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

import axios from 'axios'

class ImportarArquivos extends React.Component {

    state = {
        arquivo: ''
    }

    importar = () => {
        axios
        .post('http://localhost:8080/api/usuarios/autenticar', {
            email: 'usuario@email.com',
            senha: '321'
        }).then( response => {
            console.log(response)
        }).catch( erro => {
            console.log(erro.response)
        })
        console.log(this.state.arquivo)
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="bs-docs-section">
                        <Card title="Importar Arquivos">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Arquivo: *" htmlFor="myFile">
                                                <input type="file"
                                                    value={this.state.arquivo}
                                                    onChange={e => this.setState({ arquivo: e.target.value })}
                                                    className="form-control"
                                                    id="myFile" />
                                                <button onClick={this.importar} className="btn btn-success">
                                                    <i className="pi pi-sign-in"></i>Importar</button>
                                            </FormGroup>

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}


export default ImportarArquivos