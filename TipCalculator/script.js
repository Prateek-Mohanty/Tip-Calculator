const billInput = document.getElementById('billTotalInput')
const tipAmt = document.getElementById('tipInput')
const people = document.getElementById('numberOfPeople')
const perp = document.getElementById('perPersonTotal')
let NumberOfPeople = Number(people.innerText)
const calculateBill = () => {
    let billamount = Number(billInput.value)
    let tippercentage = Number(tipAmt.value) / 100 
    let totalTip = billamount * tippercentage 
    let grosstotal = totalTip + billamount
    let perPersonTotal = grosstotal / NumberOfPeople 
    perp.innerText = `$ ${perPersonTotal.toFixed(2)}`
  }
  const increasePeople = () => {

    NumberOfPeople += 1
    people.innerText = NumberOfPeople
    calculateBill()
  }
  const decreasePeople = () => {
    if(NumberOfPeople <= 1 ){
        return
    }
    NumberOfPeople -= 1
    people.innerText = NumberOfPeople
    calculateBill()
  }