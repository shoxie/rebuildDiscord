class ProgressBar {
  constructor (value, maxValue, barSize) {
    this.value = value
    this.maxValue = maxValue
    this.barSize = barSize
  }

  /**
   * Create a text progress bar
   * @returns {String} - The bar
   */
  createBar () {
    const percentage = this.value / this.maxValue // Calculate the percentage of the bar
    const progress = Math.round(this.barSize * percentage) // Calculate the number of square caracters to fill the progress side.
    const emptyProgress = this.barSize - progress // Calculate the number of dash caracters to fill the empty progress side.

    const progressText = '▇'.repeat(progress) // Repeat is creating a string with progress * caracters in it
    const emptyProgressText = '—'.repeat(emptyProgress) // Repeat is creating a string with empty progress * caracters in it
    const percentageText = Math.round(percentage * 100) + '%' // Displaying the percentage of the bar

    const bar = '[' + progressText + emptyProgressText + '] ' + percentageText // Creating the bar
    return bar
  }
}
//   //The barSize is the number of caracters which define the bar (default: 20)
//   const progressBar = new ProgressBar(25, 100, 20);
//   //Create the bar
//   let bar = progressBar.createBar();
//   console.log(bar);
module.exports = ProgressBar
