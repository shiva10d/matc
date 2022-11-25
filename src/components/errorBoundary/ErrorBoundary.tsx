import React from 'react'

interface state {
    hasError: boolean
    error?: any
}

export class ErrorBoundary extends React.Component<any, state> {
    constructor(props: any) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true}
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log('FRONTEND ERROR:\n', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
             return <h1>Something went wrong..</h1>;
        }
        return this.props.children
    }
}
