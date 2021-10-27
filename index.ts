import indy from 'indy-sdk'

indy
  .createWallet({ id: 'test-wallet-id' }, { key: 'test-wallet-key' })
  .then((_) => console.log('Libindy was installed correctly'))
  .catch((e) => {
    console.log('Libindy was installed correctly, but an error did occur')
    console.error(e)
  })
