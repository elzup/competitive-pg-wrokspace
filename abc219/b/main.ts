// import std = require('tstl')

{
	type Print = void | string | number | string[] | number[]
	let outs: Print[] = []

	const main = (): Print => {
		const r = _io()
		const [s1] = r.ss()
		const [s2] = r.ss()
		const [s3] = r.ss()
		const [t] = r.ss()
		const s = [s1, s2, s3]

		return t.split('').map(v => Number(v) - 1).map(v => s[v]).join('')
	}

	const _io = (i = 0) => {
		const str: string = require('fs').readFileSync('/dev/stdin', 'utf8')
		const lines = str.trim().split('\n')
		const s = () => lines[i++] || ''
		const n = () => Number(s())

		const mn = (v: string[]) => v.map(Number)
		const sp = (v: string) => v.split(' ')

		const ss = () => sp(s())
		const nn = () => mn(ss())
		const nls = () => mn(lines.slice(i))
		const nnls = () => lines.slice(i).map((v) => mn(sp(v)))

		return { lines, s, n, ss, nn, nls, nnls }
	}

	outs.push(main())

	console.log(
		outs
			.map((line) => (typeof line === 'object' ? line.join(' ') : String(line)))
			.join('\n')
	)
}
