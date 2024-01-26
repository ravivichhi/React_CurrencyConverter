import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import ButtonBox from './components/ButtonBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedamount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedamount)
    setConvertedAmount(amount)
  }

    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-gray-800 bg-no-repeat"
          style={{
              backgroundImage: ``,
          }}
      >
        <div className='justify-center items-center text-white font-serif'>
          <h1 style={{ fontSize:'50px' }}>Megma Techno</h1><br />
        </div>
        <br />
      <div className="w-full">
          <div className="w-full max-w-md mx-auto mb-10 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30" style={{ marginBottom:'150px' }}>
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount} 
                          onChangeAmount={(amount) => setAmount(amount)}
                          onChangeCurrency={(currency) => setFrom(currency)}
                          selectCurrency={from}
                          currencyOptions={currencyOptions}
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedamount} 
                          selectCurrency={to}
                          currencyOptions={currencyOptions}
                          onChangeCurrency={(currency) => setTo(currency)}
                          disableAmount
                      />
                  </div>
                  <ButtonBox
                    from={from}      
                    to={to}
                  />
              </form>
          </div>
      </div>
  </div>
  );
}

export default App
