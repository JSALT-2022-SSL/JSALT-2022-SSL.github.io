import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, Grid, InputLabel, MenuItem, Select,} from "@material-ui/core";
import {
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";
import data from "./data/progress.json";

const public_task_columnInfo = {
    PR_per_public: {
        header: "PR",
        higherBetter: false,
    },
    KS_acc_public: {
        header: "KS",
        higherBetter: true,
    },
    IC_acc_public: {
        header: "IC",
        higherBetter: true,
    },
    SID_acc_public: {
        header: "SID",
        higherBetter: true,
    },
    ER_acc_public: {
        header: "ER",
        higherBetter: true,
    },
    ASR_wer_public: {
        header: "ASR",
        higherBetter: false,
    },
    ASR_LM_wer_public: {
        header: "ASR-LM",
        higherBetter: false,
    },
    QbE_mtwv_public: {
        header: "QbE",
        higherBetter: true,
    },
    SF_f1_public: {
        header: "SF-F1",
        higherBetter: true,
    },
    SF_cer_public: {
        header: "SF-CER",
        higherBetter: false,
    },
    SV_eer_public: {
        header: "SV",
        higherBetter: false,
    },
    SD_der_public: {
        header: "SD",
        higherBetter: false,
    },
    ST_bleu_public: {
        header: "ST",
        higherBetter: true,
    },
    SE_pesq_public: {
        header: "SE-PESQ",
        higherBetter: true,
    },
    SE_stoi_public: {
        header: "SE-STOI",
        higherBetter: true,
    },
    SS_sisdri_public: {
        header: "SS",
        higherBetter: true,
    },
}


const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }
));

function SelectVariants({name, value, setValue, options}) {
    const classes = useStyles();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl variant="standard" className={classes.formControl}>
            <InputLabel>{name}</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                label="test"
            >
                {options.map((value, idx) => <MenuItem key={idx} value={idx}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

function ModelScatterChart(...props) {
    const classes = useStyles();
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(1);
    const scores = public_task_columnInfo;
    const xOptions = ["Params", "MACs"];
    const xNames = ["paramShared", "macs"];
    const xTicks = [
        [0, 100, 200, 300, 400],
        [0, 1250, 2500, 3750, 5000],
        [0, 125, 250, 375, 500],
        [0, 250, 500, 750, 1000],
        [0, 375, 750, 1125, 1500],
        [0, 625, 1250, 1875, 2500],
    ];
    const yOptions = Object.keys(scores).map(value => scores[value].header);
    const yAccess = Object.keys(scores)[y];
    const presentData = data["leaderboard"].filter(
        value => value[xNames[x]] != "-" && value[yAccess] != "-"
    ).map(
        value => ({
            "submitName": value.submitName,
            'xNames': xNames[x],
            "trainableParameter": value[`${yOptions[y]}_finetuned_param`],
            "xValue": Math.round(value[xNames[x]] / (x ? 1e6 : 1e3)) / 1e3,
            "yValue": value[yAccess]
        })
    );

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length && payload[0] && 'payload' in payload[0]) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`Model : ${payload[0].payload.submitName}`}</p>
                    <p className="desc">{`${payload[0].name} : ${payload[0].payload.xValue}`}</p>
                    <p className="desc">{`${payload[1].name} : ${payload[1].payload.yValue}`}</p>
                    <p className="desc">{`Trainable Parameter : ${payload[0].payload.trainableParameter}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <Grid container
              alignItems="center"
              justifyContent="center"
              className={classes.root}
              spacing={10}>
            <Grid container
                  item md={3} lg={2}
                  direction="column"
                  justifyContent="flex-start">
                <Grid item>
                    <SelectVariants
                        value={y}
                        setValue={setY}
                        name="Y-Axis"
                        options={yOptions}/>
                </Grid>
                <Grid item>
                    <SelectVariants
                        value={x}
                        setValue={setX}
                        name={"X-Axis"}
                        options={xOptions}/>
                </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} md={9} lg={7} xl={6}>
                <ResponsiveContainer width="100%" height={1000}>
                    <ScatterChart>
                        <CartesianGrid strokeDasharray="5 5"/>
                        <XAxis
                            dataKey="xValue"
                            name={xOptions[x]}
                            unit={x ? "GMACs" : "M"}
                            type="number"
                            ticks={xTicks[x]}
                            interval={0}
                            scale="linear"
                        />
                        <YAxis
                            dataKey="yValue"
                            name={yOptions[y]}
                            type="number"
                            domain={["dataMin", "auto"]}
                        />
                        <ZAxis dataKey="trainableParameter" name="Name"
                               scale="auto"
                               range={[60, 700]}/>
                        <Tooltip cursor={{strokeDasharray: '8 8'}} label={xOptions[x]} content={<CustomTooltip/>}/>
                        <Legend/>
                        {presentData.map((value, index) =>
                            <Scatter name={value.submitName}
                                     key={index}
                                     data={[value]}
                                     fill={'hsla(' + (360 / presentData.length * index) + ', 80%, 50%, 0.8)'}/>
                        )}
                    </ScatterChart>
                </ResponsiveContainer>
            </Grid>
            <Grid container item lg={2}/>
        </Grid>
    );
}

export {ModelScatterChart};