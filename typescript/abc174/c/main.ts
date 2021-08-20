// import std = require('tstl')

{
  type Print = void | string | number | string[] | number[]
  let outs: Print[] = []

  const main = (): Print => {
    const r = _io()
    const [K] = r.nn()

    if (K % 2 === 0 || K % 5 === 0) {
      return -1
    }
    let n = 7
    // p-q=n(x-y)

    // 左辺のp-qは、
    //
    // p=	111…111	111……111 * 7	=(10^a-1)/9
    // q=	 	111……111 * 7 =(10^b-1)/9
    //  p - q = 		((10^(a-b)-1)/9)*10^b / 7
    // 111…111*10^b / 7 =  n*(x-y)

    for (let i = 0; n <= Number.MAX_SAFE_INTEGER; i++) {
      if (K) n = n * 10 + 7
    }

    return
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
