export const convertTemperature = (temp_c,scale) => {
return scale === 'celsius' ? temp_c : (temp_c * 9/5) + 32
}