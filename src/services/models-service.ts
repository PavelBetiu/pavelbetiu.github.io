import { ModelData } from "@/data-objects/model-dto";

export class ModelService {
    private static readonly data: ModelData[] = [
        // {
        //     id: 1,
        //     params: '{"model": "roberta-base", "use features": false, "pooler": true, "hidden": 64, "learning rate": 3.1412926747417844e-05, "finetune epochs": 5}',
        //     metrics: '{"loss": 0.04894949868321419, "domain 1 loss": 0.01123545691370964, "domain 2 loss": 0.03771403059363365, "domain 1 mae": 0.08299988508224487, "domain 2 mae": 0.14344686269760132, "R2 domain 1": 0.5069765382022213, "R2 domain 2": 0.36792847865343903}',
        //     dataset_id: 2,
        //     job_id: 2,
        //     type_id: 1
        
        // },
        // {
        //     id: 2,
        //     params: '[{"max depth": 5, "min child weight": 2, "subsample": 0.6174462404426665, "eta": 0.09969699680314109, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 5, "min child weight": 1, "subsample": 0.9895464267533802, "eta": 0.09996399168708023, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]',
        //     metrics: '[{"mae": 0.09151608607835239, "R2": 0.43439301655617935}, {"mae": 0.17749424609873032, "R2": 0.25539006506867046}]',
        //     dataset_id: 2,
        //     job_id: 2,
        //     type_id: 2
        // },
        // {
        //     id: 3,
        //     params: '{"model": "neuralmind/bert-base-portuguese-cased", "use features": false, "pooler": true, "hidden": 256, "learning rate": 3.681006686703046e-05, "finetune epochs": 5}',
        //     metrics: '{"loss": 0.1363353729248047, "C1 loss": 0.016962941735982895, "C2 loss": 0.02827508933842182, "C3 loss": 0.02464529313147068, "C4 loss": 0.026394961401820183, "C5 loss": 0.04005710408091545, "C1 mae": 0.09052397310733795, "C2 mae": 0.12576743960380554, "C3 mae": 0.11472517997026443, "C4 mae": 0.12304366379976273, "C5 mae": 0.14417137205600739, "R2 C1": 0.3737086285310477, "R2 C2": 0.2571316734713873, "R2 C3": 0.30957179751942976, "R2 C4": 0.4570570855909172, "R2 C5": 0.43596649348446015}',
        //     dataset_id: 4,
        //     job_id: 3,
        //     type_id: 1
        // },
        // {
        //     id: 4,
        //     params: '[{"max depth": 5, "min child weight": 1, "subsample": 0.839148388188871, "eta": 0.09966682876671827, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 1, "subsample": 0.7655065805051668, "eta": 0.09954462632458295, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 3, "subsample": 0.7802977587904963, "eta": 0.09936030015449648, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 2, "subsample": 0.7877491112026506, "eta": 0.09948824720956138, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 3, "subsample": 0.5612512211666681, "eta": 0.09910463482218299, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]',
        //     metrics: '[{"mae": 0.12128745045045486, "R2": 0.0007360889104049972}, {"mae": 0.1417241255412084, "R2": 0.16256028274119882}, {"mae": 0.12567163771549558, "R2": 0.18644184043198875}, {"mae": 0.1584311432076951, "R2": 0.16783046316324113}, {"mae": 0.1826928586696944, "R2": 0.20777934301887513}]',
        //     dataset_id: 4,
        //     job_id: 3,
        //     type_id: 2
        // },
        // {
        //     id: 5,
        //     params: '{"model": "camembert-base", "use features": false, "pooler": false, "hidden": 256, "learning rate": 1.3573214991125404e-05, "finetune epochs": 5}',
        //     metrics: '{"loss": 0.5347586870193481, "accuracy": 0.8004115223884583, "F1": 0.6156916225453732}',
        //     dataset_id: 7,
        //     job_id: 4,
        //     type_id: 1
        // },
        // {
        //     id: 6,
        //     params: '[{"max depth": 8, "min child weight": 1, "subsample": 0.8467870611707179, "eta": 0.09983490745996952, "objective": "multi:softmax", "eval metric": ["mlogloss"], "num class": 3}]',
        //     metrics: '[{"accuracy": 0.7407407407407407, "F1": 0.5541388716961236}]',
        //     dataset_id: 7,
        //     job_id: 4,
        //     type_id: 2
        // },
        // {
        //     id: 7,
        //     params: '{"model": "camembert-base", "use features": false, "pooler": true, "hidden": 128, "learning rate": 2.062472953424673e-05, "finetune epochs": 4}',
        //     metrics: '{"loss": 0.7419878840446472, "accuracy label": 0.7119341492652893, "F1": 0.5852981914237264}',
        //     dataset_id: 7,
        //     job_id: 4,
        //     type_id: 1
        // },
        // {
        //     id: 8,
        //     params: '[{"max depth": 8, "min child weight": 2, "subsample": 0.8294960719660563, "eta": 0.09977708170355168, "objective": "multi:softmax", "eval metric": ["mlogloss"], "num class": 3}]',
        //     metrics: '[{"accuracy": 0.7407407407407407, "F1": 0.5544999523848723}]',
        //     dataset_id: 7,
        //     job_id: 4,
        //     type_id: 2
        // },
        {
            id: 9,
            params: '{"model": "camembert-base", "features": {"use": true, "projection": 64}, "pooler": false, "hidden": 64, "learning rate": 3.0384619452331514e-05, "finetune epochs": 4}',
            metrics: '{"loss": 0.46454864740371704, "accuracy label": 0.8189300298690796, "F1": 0.7309649333314058}',
            dataset_id: 7,
            job_id: 4,
            type_id: 1
        },
        {
            id: 10,
            params: '[{"max depth": 6, "min child weight": 3, "subsample": 0.6742576414869567, "eta": 0.0994855310392927, "objective": "multi:softmax", "eval metric": ["mlogloss"], "num class": 3}]',
            metrics: '[{"accuracy": 0.7551440329218106, "F1": 0.5656889895938234}]',
            dataset_id: 7,
            job_id: 4,
            type_id: 2
        },
        {
            id: 11,
            params: '{"model": "bert-base-uncased", "features": {"use": false}, "pooler": false, "hidden": 256, "learning rate": 1.9985829682597625e-05, "finetune epochs": 10}',
            metrics: '{"loss": 0.06144554913043976, "domain 1 loss": 0.012530213221907616, "domain 2 loss": 0.04891534149646759, "domain 1 mae": 0.0886206403374672, "domain 2 mae": 0.17102064192295074, "R2 domain 1": 0.4501614642889611, "R2 domain 2": 0.18019917360215798}',
            dataset_id: 2,
            job_id: 2,
            type_id: 1
        },
        {
            id: 12,
            params: '[{"max depth": 8, "min child weight": 2, "subsample": 0.5257348548045665, "eta": 0.09953108552344841, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 5, "min child weight": 2, "subsample": 0.9514475696416401, "eta": 0.09989093563895853, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]',
            metrics: '[{"mae": 0.09163542870018215, "R2": 0.42347143349421756}, {"mae": 0.1752511225916721, "R2": 0.2687023211798196}]',
            dataset_id: 2,
            job_id: 2,
            type_id: 2
        },
        {
            id: 13,
            params: '{"model": "neuralmind/bert-base-portuguese-cased", "features": {"use": true, "projection": 128}, "pooler": true, "hidden": 128, "learning rate": 6.76008515447366e-05, "finetune epochs": 10}',
            metrics: '{"loss": 0.18050092458724976, "C1": 0.018745461478829384, "C2": 0.032688699662685394, "C3": 0.02434244565665722, "C4": 0.03898945078253746, "C5": 0.0657348483800888, "C1 mae": 0.09353041648864746, "C2 mae": 0.1379157155752182, "C3 mae": 0.11323973536491394, "C4 mae": 0.14877165853977203, "C5 mae": 0.19737835228443146, "R2 C1": 0.3078956428875519, "R2 C2": 0.1411732755720272, "R2 C3": 0.3180559856987075, "R2 C4": 0.19798895273106443, "R2 C5": 0.07440473266095682}',
            dataset_id: 4,
            job_id: 3,
            type_id: 1
        },
        {
            id: 14,
            params: '[{"max depth": 6, "min child weight": 3, "subsample": 0.782805854311629, "eta": 0.09989401600579202, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 3, "subsample": 0.7679219048809528, "eta": 0.09923668782311051, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 3, "subsample": 0.7937141861733042, "eta": 0.09970997560891544, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 2, "subsample": 0.7866060839496565, "eta": 0.09943854602803504, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 3, "subsample": 0.9134557437015992, "eta": 0.09964797473731199, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]',
            metrics: '[{"mae": 0.1220490415694596, "R2": -0.0077996178805810334}, {"mae": 0.14236289299032986, "R2": 0.1592945008578336}, {"mae": 0.1250189070012633, "R2": 0.18934995454275028}, {"mae": 0.15885611850045936, "R2": 0.15743689546958417}, {"mae": 0.182283270370371, "R2": 0.2125161780144884}]',
            dataset_id: 4,
            job_id: 3,
            type_id: 2
        },


        /*
        {"model": "camembert-base", "use features": false, "pooler": true, "hidden": 128, "learning rate": 2.062472953424673e-05, "finetune epochs": 4}	{"loss": 0.7419878840446472, "accuracy label": 0.7119341492652893, "F1": 0.5852981914237264}	7	4	1
27	[{"max depth": 8, "min child weight": 2, "subsample": 0.8294960719660563, "eta": 0.09977708170355168, "objective": "multi:softmax", "eval metric": ["mlogloss"], "num class": 3}]	[{"accuracy": 0.7407407407407407, "F1": 0.5544999523848723}]	7	4	2
28	{"model": "camembert-base", "features": {"use": true, "projection": 64}, "pooler": false, "hidden": 64, "learning rate": 3.0384619452331514e-05, "finetune epochs": 4}	{"loss": 0.46454864740371704, "accuracy label": 0.8189300298690796, "F1": 0.7309649333314058}	7	4	1
29	[{"max depth": 6, "min child weight": 3, "subsample": 0.6742576414869567, "eta": 0.0994855310392927, "objective": "multi:softmax", "eval metric": ["mlogloss"], "num class": 3}]	[{"accuracy": 0.7551440329218106, "F1": 0.5656889895938234}]	7	4	2
30	{"model": "bert-base-uncased", "features": {"use": false}, "pooler": false, "hidden": 256, "learning rate": 1.9985829682597625e-05, "finetune epochs": 10}	{"loss": 0.06144554913043976, "domain 1 loss": 0.012530213221907616, "domain 2 loss": 0.04891534149646759, "domain 1 mae": 0.0886206403374672, "domain 2 mae": 0.17102064192295074, "R2 domain 1": 0.4501614642889611, "R2 domain 2": 0.18019917360215798}	4	2	1
31	[{"max depth": 8, "min child weight": 2, "subsample": 0.5257348548045665, "eta": 0.09953108552344841, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 5, "min child weight": 2, "subsample": 0.9514475696416401, "eta": 0.09989093563895853, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]	[{"mae": 0.09163542870018215, "R2": 0.42347143349421756}, {"mae": 0.1752511225916721, "R2": 0.2687023211798196}]	4	2	2
32	{"model": "neuralmind/bert-base-portuguese-cased", "features": {"use": true, "projection": 128}, "pooler": true, "hidden": 128, "learning rate": 6.76008515447366e-05, "finetune epochs": 10}	{"loss": 0.18050092458724976, "C1": 0.018745461478829384, "C2": 0.032688699662685394, "C3": 0.02434244565665722, "C4": 0.03898945078253746, "C5": 0.0657348483800888, "C1_MAE_C1": 0.09353041648864746, "C2_MAE_C2": 0.1379157155752182, "C3_MAE_C3": 0.11323973536491394, "C4_MAE_C4": 0.14877165853977203, "C5_MAE_C5": 0.19737835228443146, "R2_C1": 0.3078956428875519, "R2_C2": 0.1411732755720272, "R2_C3": 0.3180559856987075, "R2_C4": 0.19798895273106443, "R2_C5": 0.07440473266095682}	6	3	1
33	[{"max depth": 6, "min child weight": 3, "subsample": 0.782805854311629, "eta": 0.09989401600579202, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 3, "subsample": 0.7679219048809528, "eta": 0.09923668782311051, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 3, "subsample": 0.7937141861733042, "eta": 0.09970997560891544, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 7, "min child weight": 2, "subsample": 0.7866060839496565, "eta": 0.09943854602803504, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}, {"max depth": 6, "min child weight": 3, "subsample": 0.9134557437015992, "eta": 0.09964797473731199, "objective": "reg:squarederror", "eval metric": ["rmse", "mae"]}]	[{"mae": 0.1220490415694596, "R2": -0.0077996178805810334}, {"mae": 0.14236289299032986, "R2": 0.1592945008578336}, {"mae": 0.1250189070012633, "R2": 0.18934995454275028}, {"mae": 0.15885611850045936, "R2": 0.15743689546958417}, {"mae": 0.182283270370371, "R2": 0.2125161780144884}]	6	3	2
\.
        */
    ];

    public static getModels(): ModelData[] {
        return this.data;
    }

    //TODO: axios call to get model data
}