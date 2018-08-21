import React from 'react'
import ReactFilestack from 'filestack-react'
import styled from 'styled-components'

const Section = styled.section`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Card = styled.div`
  padding: 5px;
  margin-top: 10px;
  margin-right: 10px;
  border: 4px solid;
  color: hsla(240, 100%, 25%, 0.5);
  border-radius: 5px;
  max-width: 200px;
`

const CardImage = styled.img`
  max-width: 200px;
`

const ButtonPicker = styled.button`
  font-size: 1em;
  padding: 5px 10px;
  color: #fff;
  background: navy;
  border: none;
  border-radius: 5px;
`

class PageUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      apiKey: process.env.REACT_APP_API_KEY,
      options: {
        accept: 'image/*',
        maxFiles: 3
      },
      filesFailed: [],
      filesUploaded: [],
      error: null
    }

    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  handleSuccess(response) {
    console.log('success:', response)
    this.setState({
      filesFailed: response.filesFailed,
      filesUploaded: response.filesUploaded
    })
  }

  handleError(error) {
    console.log('error', error)
    this.setState({
      error
    })
  }

  render() {
    const { apiKey, options, filesUploaded } = this.state
    const images = [
      {
        url: 'https://cdn.filestackcontent.com/cn57JjHQMGXGPTaeuaSe',
        filename: 'ikigai.jpg'
      },
      {
        url: 'https://cdn.filestackcontent.com/5isnBOMTtKuKcIgIUmUN',
        filename: 'red.jpg'
      },
      {
        url: 'https://cdn.filestackcontent.com/7Oz7VswfRQO3aq9AX3Mp',
        filename: 'yellow.jpg'
      },
      {
        url: 'https://cdn.filestackcontent.com/u54rSwTJeAtcoKaPKgQE',
        filename: 'green.jpg'
      }
    ]

    return (
      <div>
        <Section>
          <ReactFilestack
            buttonClass="buttonUpload"
            apikey={apiKey}
            options={options}
            onSuccess={this.handleSuccess}
            onError={this.handleError}
            render={({ onPick }) => (
              <div>
                <h3>Image File Upload</h3>
                <ButtonPicker onClick={onPick}>Pick Image</ButtonPicker>
              </div>
            )}
          />
        </Section>

        <Section>
          {filesUploaded.length > 0
            ? filesUploaded.map((file, index) => {
                return (
                  <Card key={index}>
                    <CardImage src={file.url} alt={file.filename} />
                  </Card>
                )
              })
            : images.map((file, index) => {
                return (
                  <Card key={index}>
                    <CardImage src={file.url} alt={file.filename} />
                  </Card>
                )
              })}
        </Section>
      </div>
    )
  }
}

export default PageUpload
