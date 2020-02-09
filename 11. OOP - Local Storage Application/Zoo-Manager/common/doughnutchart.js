class doughnutChart extends BaseElement {
    constructor (parent,data){
        super(parent, "canvas");
    this.doughnutChart = new CharacterData;
    this.domElement = {
        type: "doughnut", data: {
        labels: ["LoW","Medium","High"];
        datasets: [{
            data: data,
            backgroundColor: ["red","blue","green"]
        }]}
    }
    }
}