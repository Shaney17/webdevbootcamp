{"filter":false,"title":"camps.js","tooltip":"/YelpCamp/v11/routes/camps.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":42,"column":8},"end":{"row":51,"column":7},"action":"insert","lines":["Campgrounds.create(newCampground, function(err, newlyCreated){","        if(err){","            req.flash(\"error\", \"Something went wrong !\");","            console.log(err);","        } else {","            req.flash(\"success\", \"Successfully added Campground !\");","            //redirect back to campgrounds page","            res.redirect(\"/camps\");","        }","    });"],"id":2863}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "],"id":2864},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"insert","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"insert","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":53,"column":4},"end":{"row":53,"column":45},"action":"remove","lines":["// Create a new campground and save to DB"],"id":2865}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "],"id":2866}],[{"start":{"row":52,"column":5},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":2867}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "],"id":2868}],[{"start":{"row":52,"column":5},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":2869}],[{"start":{"row":41,"column":12},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":2870},{"start":{"row":42,"column":0},"end":{"row":42,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":49},"action":"insert","lines":["// Create a new campground and save to DB"],"id":2871}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"remove","lines":["s"],"id":2872}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["q"],"id":2873}],[{"start":{"row":172,"column":108},"end":{"row":173,"column":0},"action":"insert","lines":["",""],"id":2874},{"start":{"row":173,"column":0},"end":{"row":173,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":173,"column":12},"end":{"row":173,"column":13},"action":"insert","lines":["c"],"id":2875}],[{"start":{"row":173,"column":13},"end":{"row":173,"column":14},"action":"insert","lines":["o"],"id":2876}],[{"start":{"row":173,"column":14},"end":{"row":173,"column":15},"action":"insert","lines":["n"],"id":2877}],[{"start":{"row":173,"column":15},"end":{"row":173,"column":16},"action":"insert","lines":["s"],"id":2878}],[{"start":{"row":173,"column":16},"end":{"row":173,"column":17},"action":"insert","lines":["o"],"id":2879}],[{"start":{"row":173,"column":17},"end":{"row":173,"column":18},"action":"insert","lines":["l"],"id":2880}],[{"start":{"row":173,"column":18},"end":{"row":173,"column":19},"action":"insert","lines":["e"],"id":2881}],[{"start":{"row":173,"column":19},"end":{"row":173,"column":20},"action":"insert","lines":["."],"id":2882}],[{"start":{"row":173,"column":20},"end":{"row":173,"column":21},"action":"insert","lines":["l"],"id":2883}],[{"start":{"row":173,"column":21},"end":{"row":173,"column":22},"action":"insert","lines":["o"],"id":2884}],[{"start":{"row":173,"column":22},"end":{"row":173,"column":23},"action":"insert","lines":["g"],"id":2885}],[{"start":{"row":173,"column":23},"end":{"row":173,"column":25},"action":"insert","lines":["()"],"id":2886}],[{"start":{"row":173,"column":24},"end":{"row":173,"column":25},"action":"insert","lines":["s"],"id":2887}],[{"start":{"row":173,"column":25},"end":{"row":173,"column":26},"action":"insert","lines":["l"],"id":2888}],[{"start":{"row":173,"column":25},"end":{"row":173,"column":26},"action":"remove","lines":["l"],"id":2889}],[{"start":{"row":173,"column":25},"end":{"row":173,"column":26},"action":"insert","lines":["p"],"id":2890}],[{"start":{"row":173,"column":24},"end":{"row":173,"column":26},"action":"remove","lines":["sp"],"id":2891},{"start":{"row":173,"column":24},"end":{"row":173,"column":40},"action":"insert","lines":["spliceCampground"]}],[{"start":{"row":173,"column":41},"end":{"row":173,"column":42},"action":"insert","lines":[";"],"id":2892}],[{"start":{"row":171,"column":31},"end":{"row":172,"column":0},"action":"insert","lines":["",""],"id":2893},{"start":{"row":172,"column":0},"end":{"row":172,"column":11},"action":"insert","lines":["           "]}],[{"start":{"row":172,"column":11},"end":{"row":172,"column":12},"action":"insert","lines":["c"],"id":2894}],[{"start":{"row":172,"column":12},"end":{"row":172,"column":13},"action":"insert","lines":["o"],"id":2895}],[{"start":{"row":172,"column":13},"end":{"row":172,"column":14},"action":"insert","lines":["n"],"id":2896}],[{"start":{"row":172,"column":14},"end":{"row":172,"column":15},"action":"insert","lines":["s"],"id":2897}],[{"start":{"row":172,"column":15},"end":{"row":172,"column":16},"action":"insert","lines":["o"],"id":2898}],[{"start":{"row":172,"column":16},"end":{"row":172,"column":17},"action":"insert","lines":["l"],"id":2899}],[{"start":{"row":172,"column":17},"end":{"row":172,"column":18},"action":"insert","lines":["e"],"id":2900}],[{"start":{"row":172,"column":18},"end":{"row":172,"column":19},"action":"insert","lines":["."],"id":2901}],[{"start":{"row":172,"column":19},"end":{"row":172,"column":20},"action":"insert","lines":["l"],"id":2902}],[{"start":{"row":172,"column":20},"end":{"row":172,"column":21},"action":"insert","lines":["o"],"id":2903}],[{"start":{"row":172,"column":21},"end":{"row":172,"column":22},"action":"insert","lines":["g"],"id":2904}],[{"start":{"row":172,"column":22},"end":{"row":172,"column":24},"action":"insert","lines":["()"],"id":2905}],[{"start":{"row":172,"column":23},"end":{"row":172,"column":24},"action":"insert","lines":["f"],"id":2906}],[{"start":{"row":172,"column":24},"end":{"row":172,"column":25},"action":"insert","lines":["o"],"id":2907}],[{"start":{"row":172,"column":23},"end":{"row":172,"column":25},"action":"remove","lines":["fo"],"id":2908},{"start":{"row":172,"column":23},"end":{"row":172,"column":38},"action":"insert","lines":["foundCampground"]}],[{"start":{"row":172,"column":38},"end":{"row":172,"column":39},"action":"insert","lines":["."],"id":2909}],[{"start":{"row":172,"column":39},"end":{"row":172,"column":40},"action":"insert","lines":["i"],"id":2910}],[{"start":{"row":172,"column":40},"end":{"row":172,"column":41},"action":"insert","lines":["d"],"id":2911}],[{"start":{"row":172,"column":42},"end":{"row":172,"column":43},"action":"insert","lines":[";"],"id":2912}],[{"start":{"row":172,"column":23},"end":{"row":172,"column":41},"action":"remove","lines":["foundCampground.id"],"id":2913},{"start":{"row":172,"column":23},"end":{"row":172,"column":67},"action":"insert","lines":["user.campgrounds.indexOf(foundCampground.id)"]}],[{"start":{"row":173,"column":35},"end":{"row":173,"column":107},"action":"remove","lines":["user.campgrounds.splice(user.campgrounds.indexOf(foundCampground.id), 1)"],"id":2914}],[{"start":{"row":175,"column":55},"end":{"row":175,"column":71},"action":"remove","lines":["spliceCampground"],"id":2915},{"start":{"row":175,"column":55},"end":{"row":175,"column":127},"action":"insert","lines":["user.campgrounds.splice(user.campgrounds.indexOf(foundCampground.id), 1)"]}],[{"start":{"row":172,"column":12},"end":{"row":174,"column":42},"action":"remove","lines":["onsole.log(user.campgrounds.indexOf(foundCampground.id));","            var spliceCampground = ;","            console.log(spliceCampground);"],"id":2916}],[{"start":{"row":172,"column":11},"end":{"row":172,"column":12},"action":"remove","lines":["c"],"id":2917}],[{"start":{"row":172,"column":10},"end":{"row":172,"column":11},"action":"remove","lines":[" "],"id":2918}],[{"start":{"row":172,"column":9},"end":{"row":172,"column":10},"action":"remove","lines":[" "],"id":2919}],[{"start":{"row":172,"column":8},"end":{"row":172,"column":9},"action":"remove","lines":[" "],"id":2920}],[{"start":{"row":172,"column":4},"end":{"row":172,"column":8},"action":"remove","lines":["    "],"id":2921}],[{"start":{"row":172,"column":0},"end":{"row":172,"column":4},"action":"remove","lines":["    "],"id":2922}],[{"start":{"row":171,"column":31},"end":{"row":172,"column":0},"action":"remove","lines":["",""],"id":2923}],[{"start":{"row":172,"column":55},"end":{"row":172,"column":127},"action":"remove","lines":["user.campgrounds.splice(user.campgrounds.indexOf(foundCampground.id), 1)"],"id":2945}],[{"start":{"row":171,"column":31},"end":{"row":172,"column":0},"action":"insert","lines":["",""],"id":2946},{"start":{"row":172,"column":0},"end":{"row":172,"column":11},"action":"insert","lines":["           "]}],[{"start":{"row":172,"column":11},"end":{"row":172,"column":83},"action":"insert","lines":["user.campgrounds.splice(user.campgrounds.indexOf(foundCampground.id), 1)"],"id":2947}],[{"start":{"row":172,"column":83},"end":{"row":172,"column":84},"action":"insert","lines":[";"],"id":2948}],[{"start":{"row":173,"column":55},"end":{"row":173,"column":56},"action":"insert","lines":["u"],"id":2949}],[{"start":{"row":173,"column":56},"end":{"row":173,"column":57},"action":"insert","lines":["s"],"id":2950}],[{"start":{"row":173,"column":57},"end":{"row":173,"column":58},"action":"insert","lines":["e"],"id":2951}],[{"start":{"row":173,"column":58},"end":{"row":173,"column":59},"action":"insert","lines":["r"],"id":2952}],[{"start":{"row":173,"column":59},"end":{"row":173,"column":60},"action":"insert","lines":["."],"id":2953}],[{"start":{"row":173,"column":60},"end":{"row":173,"column":61},"action":"insert","lines":["c"],"id":2954}],[{"start":{"row":173,"column":61},"end":{"row":173,"column":62},"action":"insert","lines":["a"],"id":2955}],[{"start":{"row":173,"column":62},"end":{"row":173,"column":63},"action":"insert","lines":["m"],"id":2956}],[{"start":{"row":173,"column":60},"end":{"row":173,"column":63},"action":"remove","lines":["cam"],"id":2957},{"start":{"row":173,"column":60},"end":{"row":173,"column":71},"action":"insert","lines":["campgrounds"]}],[{"start":{"row":172,"column":84},"end":{"row":173,"column":0},"action":"insert","lines":["",""],"id":2958},{"start":{"row":173,"column":0},"end":{"row":173,"column":11},"action":"insert","lines":["           "]}],[{"start":{"row":173,"column":11},"end":{"row":173,"column":12},"action":"insert","lines":["c"],"id":2959}],[{"start":{"row":173,"column":12},"end":{"row":173,"column":13},"action":"insert","lines":["o"],"id":2960}],[{"start":{"row":173,"column":13},"end":{"row":173,"column":14},"action":"insert","lines":["n"],"id":2961}],[{"start":{"row":173,"column":14},"end":{"row":173,"column":15},"action":"insert","lines":["s"],"id":2962}],[{"start":{"row":173,"column":15},"end":{"row":173,"column":16},"action":"insert","lines":["o"],"id":2963}],[{"start":{"row":173,"column":16},"end":{"row":173,"column":17},"action":"insert","lines":["l"],"id":2964}],[{"start":{"row":173,"column":17},"end":{"row":173,"column":18},"action":"insert","lines":["e"],"id":2965}],[{"start":{"row":173,"column":18},"end":{"row":173,"column":19},"action":"insert","lines":["."],"id":2966}],[{"start":{"row":173,"column":19},"end":{"row":173,"column":20},"action":"insert","lines":["l"],"id":2967}],[{"start":{"row":173,"column":20},"end":{"row":173,"column":21},"action":"insert","lines":["o"],"id":2968}],[{"start":{"row":173,"column":21},"end":{"row":173,"column":22},"action":"insert","lines":["g"],"id":2969}],[{"start":{"row":173,"column":22},"end":{"row":173,"column":24},"action":"insert","lines":["()"],"id":2970}],[{"start":{"row":173,"column":23},"end":{"row":173,"column":24},"action":"insert","lines":["u"],"id":2971}],[{"start":{"row":173,"column":24},"end":{"row":173,"column":25},"action":"insert","lines":["s"],"id":2972}],[{"start":{"row":173,"column":25},"end":{"row":173,"column":26},"action":"insert","lines":["e"],"id":2973}],[{"start":{"row":173,"column":26},"end":{"row":173,"column":27},"action":"insert","lines":["r"],"id":2974}],[{"start":{"row":173,"column":27},"end":{"row":173,"column":28},"action":"insert","lines":["."],"id":2975}],[{"start":{"row":173,"column":28},"end":{"row":173,"column":29},"action":"insert","lines":["c"],"id":2976}],[{"start":{"row":173,"column":29},"end":{"row":173,"column":30},"action":"insert","lines":["a"],"id":2977}],[{"start":{"row":173,"column":30},"end":{"row":173,"column":31},"action":"insert","lines":["m"],"id":2978}],[{"start":{"row":173,"column":31},"end":{"row":173,"column":32},"action":"insert","lines":["p"],"id":2979}],[{"start":{"row":173,"column":28},"end":{"row":173,"column":32},"action":"remove","lines":["camp"],"id":2980},{"start":{"row":173,"column":28},"end":{"row":173,"column":39},"action":"insert","lines":["campgrounds"]}],[{"start":{"row":173,"column":40},"end":{"row":173,"column":41},"action":"insert","lines":[";"],"id":2981}],[{"start":{"row":174,"column":59},"end":{"row":174,"column":71},"action":"remove","lines":[".campgrounds"],"id":2991}],[{"start":{"row":173,"column":0},"end":{"row":173,"column":41},"action":"remove","lines":["           console.log(user.campgrounds);"],"id":2992}],[{"start":{"row":172,"column":84},"end":{"row":173,"column":0},"action":"remove","lines":["",""],"id":2993}]]},"ace":{"folds":[],"scrolltop":2711,"scrollleft":0,"selection":{"start":{"row":169,"column":64},"end":{"row":169,"column":64},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":158,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1490624534331,"hash":"2d934fe390592633d745178b8dedec58183528d7"}