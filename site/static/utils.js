var call_payoff = function(strike, premium, price) {
    if (price < strike)
        return -100 * premium;
    else
        return 100 * ((price - strike) - premium);

}

var short_call_payoff = function(strike, premium, price) {
    return -1 * call_payoff(strike, premium, price);

}

var put_payoff = function(strike, premium, price) {
    if (price <= strike)
        return 100 * ((strike - price) - premium);
    else
        return -100 * premium;
}

var short_put_payoff = function(strike, premium, price) {
    return -1 * put_payoff(strike, premium, price);
}

function generate_simple_chart(div, name, strike, premium, contract_payoff, end) {
    var contract = [name];
    for (var i = 0; i <= end; i++) {
        contract.push(contract_payoff(strike, premium, i) / 100);
    };
    var chart = c3.generate({
        bindto: div,
        data: {
            columns: [
                contract,
            ],
            //types: {
            //    columns: 'area',
            //    data3: 'area-spline'
            //  }
        },
        point: {
            show: false
        },
        axis: {
            x: {
                label: 'Underlying Price'
            },
            y: {
                label: 'Profit'
            }
        },
        grid: {
            x: {
                lines: [
                    {value: strike, text: "Strike Price", position: "middle"},
                ],
            },
        },
        size: {
            width: 650,
        },
        padding: {
            right: 10,
            top: 10,
        },
        tooltip: {
            format: {
                title: function(d) {return "Underlying Price of $" + d;},
                value: function(value, ratio, id) {return "$" + value +" profit";},
            }
        },
    });
}