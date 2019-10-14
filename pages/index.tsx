import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../src/index'), {
	ssr: false,
})

function Home() {
	return (
		<div>
			<DynamicComponentWithNoSSR />
		</div>
	)
}

export default Home
