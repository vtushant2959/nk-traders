import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  componentDidCatch(err, info) { console.error('[NK Traders] Section crash:', err, info) }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      if (import.meta.env.DEV) {
        return (
          <div style={{ padding: '16px', margin: '8px', background: '#1a0000', border: '1px solid #ff4444', borderRadius: '8px', color: '#ff8888', fontSize: '12px', fontFamily: 'monospace' }}>
            <strong style={{ color: '#ff4444' }}>⚠ Section Error: {this.props.name || 'Unknown'}</strong>
            <br />
            {this.state.error?.message}
          </div>
        )
      }
      return null
    }
    return this.props.children
  }
}
