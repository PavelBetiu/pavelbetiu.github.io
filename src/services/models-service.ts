import { ModelData } from "@/data-objects/model-dto";

export class ModelService {
    private static readonly data: ModelData[] = [
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
    ];

    public static getModels(): ModelData[] {
        return this.data;
    }

    //TODO: axios call to get model data
}