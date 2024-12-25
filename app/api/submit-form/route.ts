import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    console.log('Received form data:', body)

    const portalId = '48646825'
    const formGuid = '6a4229cb-ad4a-4040-a18f-42376052b2a4'
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

    // Map the form fields to match HubSpot's expected format
    const fields = [
      { name: 'firstname', value: body.firstname },
      { name: 'lastname', value: body.lastname },
      { name: 'email', value: body.email },
      { name: 'phone', value: body.phone },
      { name: 'company', value: body.company },
      { name: 'message', value: body.message }
    ].filter(field => field.value != null && field.value !== '')

    const payload = {
      fields,
      context: {
        pageUri: 'https://thor-group.com',
        pageName: 'Thor Group - Contact Form'
      }
    }

    console.log('Submitting to HubSpot:', {
      url: hubspotEndpoint,
      payload: JSON.stringify(payload)
    })

    const response = await fetch(hubspotEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    const responseData = await response.json()

    console.log('HubSpot response:', {
      status: response.status,
      statusText: response.statusText,
      data: responseData
    })

    if (!response.ok) {
      throw new Error(responseData.message || `HubSpot submission failed: ${response.status} ${response.statusText}`)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully',
      data: responseData
    })
  } catch (error) {
    console.error('Server error:', error)
    
    return NextResponse.json(
      { 
        success: false,
        message: error.message || 'Failed to submit form',
        error: error.stack
      },
      { status: 500 }
    )
  }
}

