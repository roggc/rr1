__devMode__&& console.log('src/redux/extra/start/actions')

export const start= ()=>(dispatch)=>
{
  history.replaceState(null,null,'home')
  dispatch({type: 'START'})
}
