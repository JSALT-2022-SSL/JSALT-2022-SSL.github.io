import React from 'react'
import './index.css';

class IntroPage extends React.Component {
    render() {
        return (
            <div id="main">
                <section className="post">
                    <header>
                        <h2>Leveraging Pre-training Models for Speech Processing</h2>
                        <p>Research Groups</p>
                    </header>
                    <p>
                        Pre-training has proven to be crucial in advancing the state of speech, natural language
                        processing (NLP), and computer vision (CV) research in recent years. The network is
                        first trained via a pre-training task, leveraging ubiquitous unlabeled data. The
                        pre-training is usually application-agnostic, and the pre-trained models are transferred
                        to multiple downstream applications. SUPERB [Yang et al., 2021], LeBenchmark [Evain et
                        al., 2021], and NOSS [Shor et al., 2020][Shor et al., 2021] are the initial effort to
                        evaluate the pre-trained models on their generalizability across various speech and
                        audio processing tasks and find that the pre-trained models achieve outstanding
                        performance on a wide range of tasks. The public available pre-trained models
                        significantly benefit the small players. For example, with a pre-trained model, one only
                        needs to train a two-layer LSTM as a downstream model to achieve 3% WER on Librispeech
                        [Yang et al., 2021]. Without pre-training, a network with more than ten layers is
                        usually required to achieve the same-level performance.
                    </p>
                    <p>
                        The project aims to expand the existing benchmarking to provide a comprehensive
                        understanding of pre-trained networks and develop new techniques to leverage the
                        pre-trained models better. We believe this project will broadly push the front of
                        network pre-training technology in speech. We will explore the following research
                        directions, including: 1) Expand the use of pre-trained techniques for modeling prosody.
                        2) Look for efficient ways to leverage the pre-trained models in downstream tasks. 3)
                        Investigate the robustness of pre-trained models, for example, benchmarking their
                        performance under domain mismatch, and make them more robust by pre-training with visual
                        information. 4) Develop efficient pre-trained models regarding computation and memory
                        (or even carbon) footprint. We will open-source developed benchmarks, tools, and
                        techniques for all researchers interested in the area driving the frontier together.
                    </p>
                </section>
                <section className="post">
                    <header>
                        <h3>Full Proposal</h3>
                    </header>
                    <p>
                        <h5>Research Direction</h5>
                        <br/>
                        I. Pre-trained Models for Prosody. Previous work has studied the ability of pre-trained
                        models to extract phonetic and speaker information [Yang et al., 2021][Evain et al.,
                        2021]. However, it is unclear whether they can extract prosodic information from speech,
                        which is essential for interactive dialogue systems. The project will first extend the
                        existing pre-training models to support prosody for pragmatic-related classification
                        tasks, including turn-taking, micro-emotion, and prediction of response prosody. Then we
                        will study which kind of pre-training task is most suitable for the pre-training model
                        to learn prosody, and we will adjust/expand the pre-training models to better handle the
                        prosody. Outcome: Deliver the pre-trained model for prosody extraction.
                        <br/>
                        <br/>
                        II. How to use the pre-trained models. So far, there are two main methods of using the
                        speech pre-training models: (1) freezing the representation models and using them as
                        feature extractors, (2) fine-tuning the representation models with downstream tasks. Are
                        there other ways to use them? In the NLP community, the adapter-based method [Guo et
                        al., 2020][Ben Zaken et al., 2021] and prompt/instruction learning [Liu et al., 2021]
                        have achieved competitive performance compared with fine-tuning, but the exploration in
                        speech is insufficient. We will apply these methods to use cases such as
                        multi-linguality, multi-accent, low-resourced learning, model robustness, understand the
                        efficacy of these methods, and innovate ways to improve performance. Outcome: Deliver a
                        toolbox for efficient leverage pre-trained speech model.
                        <br/>
                        <br/>
                        III. Model robustness & Visual-enhanced Pre-trained Models: The pre-training models show
                        outstanding performance on various applications, but their failure modes are still
                        unclear. Are they robust to domain shift? Are they robust to adversarial attacks? There
                        are some preliminary researches about domain shift [Hsu et al.,2021] and the adversarial
                        attack [Wu et al., 2021] of pre-training models, but we will
                        conduct a more thorough study in this project. We will also study how to make the
                        pre-trained models more robust. It has been known that visual information improves
                        speech representations [Peng et al., 2021]. This project will further study the
                        robustness of the visual-enhanced pre-trained models. Outcome: Comprehensively
                        understand the robustness of the pre-trained models and deliver a more robust
                        pre-trained model.
                        <br/>
                        <br/>
                        IV. Greener Pre-trained Models: Larger representation models usually lead to better
                        downstream performance [Pu et al., 2021]. Despite the success of these vast models, they
                        require large memory and high computational costs. We will explore various approaches of
                        network compression, including knowledge distillation [Chang et al., 2021], pruning [Lai
                        et al., 2021], and dynamic computation [Yu et al., 2019], etc. to compress pre-trained
                        networks. These technologies are helpful in CV and NLP [Ganesh et al., 2021] but not
                        fully explored in pre-trained speech models. We will optimize and provide benchmarks for
                        metrics beyond accuracy, e.g., number of parameters and inference time. Outcome: Deliver
                        a small yet powerful pre-trained model.
                        <br/>
                    </p>
                    <p>
                        <h5>Preparation</h5>
                        <br/>
                        Team members developed a public toolkit s3prl (https://github.com/s3prl/s3prl) to
                        support pre-training research on speech processing tasks. These toolkits can support a
                        wide range of pretrained models and downstream tasks. We are extending s3prl with more
                        architectures, learning algorithms, and benchmark metrics, and use cases. In the
                        workshop, we will be working on the project based on s3prl, so some pretrained models
                        and downstream tasks for evaluation are ready.
                        <br/>
                    </p>
                    <p>
                        <h5>Timeline</h5>
                        <br/>
                        <h5>Heavy Pre-training (Pre-workshop)<br/></h5>
                        ● Preparing all pre-trained models and downstream tasks.<br/>
                        ● Running the standard techniques in each direction.<br/>
                        ● Fine-tuning and Lightweight Pre-training (During workshop)<br/>
                        <br/>
                        <h5>Fine-tuning and Lightweight Pre-training (During workshop)</h5>
                        2 Weeks:<br/>
                        ● Integrating the directions (e.g., model compression may change model robustness, etc.)<br/>
                        ● Fine-tuning and Lightweight Pre-training (During workshop)<br/>
                        <br/>
                        4 weeks:<br/>
                        ● Preparing the outcomes for each direction.<br/>
                        ● Investigating new ideas for leveraging pre-training spanning the four directions.<br/>
                    </p>
                    <p>
                        <h5>Reference</h5>
                        <br/>
                        [Ben Zaken et al., 2021] Elad Ben Zaken, and Shauli Ravfogel, Yoav Goldberg, BitFit: Simple Parameter-efficient Fine-tuning for Transformer-based Masked Language-model, arXiv:2106.10199, 2021<br/>
                        [Chang et al., 2021] Heng-Jui Chang, Shu-wen Yang, Hung-yi Lee, DistilHuBERT: Speech Representation Learning by Layer-wise Distillation of Hidden-unit BERT, arXiv:2110.01900, 2021<br/>
                        [Evain et al., 2021] Solene Evain, Ha Nguyen, Hang Le, Marcely Zanon Boito, Salima Mdhaffar, Sina Alisamir, Ziyi Tong, Natalia Tomashenko, Marco Dinarelli, Titouan Parcollet, Alexandre Allauzen, Yannick Esteve, Benjamin Lecouteux, Francois Portet, Solange Rossato, Fabien Ringeval, Didier Schwab, Laurent Besacier, LeBenchmark: A Reproducible Framework for Assessing Self-Supervised Representation Learning from Speech, Interspeech, 2021<br/>
                        [Ganesh et al., 2021] Prakhar Ganesh, Yao Chen, Xin Lou, Mohammad Ali Khan, Yin Yang, Hassan Sajjad, Preslav Nakov, Deming Chen, Marianne Winslett, Compressing Large-Scale Transformer-Based Models: A Case Study on BERT, TACL, 2021<br/>
                        [Guo et al., 2020] Demi Guo, Alexander M Rush, Yoon Kim, Parameter-efficient transfer learning with diff pruning, arXiv:2012.07463, 2020<br/>
                        [Hsu et al., 2021] Wei-Ning Hsu, Anuroop Sriram, Alexei Baevski, Tatiana Likhomanenko, Qiantong Xu, Vineel Pratap, Jacob Kahn, Ann Lee, Ronan Collobert, Gabriel Synnaeve, Michael Auli, Robust wav2vec 2.0: Analyzing Domain Shift in Self-Supervised Pre-Training, Interspeech, 2021<br/>
                        [Lai et al., 2021] Cheng-I Jeff Lai, Yang Zhang, Alexander H. Liu, Shiyu Chang, Yi-Lun Liao, Yung-Sung Chuang, Kaizhi Qian, Sameer Khurana, David D. Cox, James R. Glass, PARP: Prune, Adjust and Re-Prune for Self-Supervised Speech Recognition, arXiv:2106.05933, 2021<br/>
                        [Liu et al., 2021] Pengfei Liu, Weizhe Yuan and Jinlan Fu, Zhengbao Jiang, Hiroaki Hayashi, Graham Neubig, Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing, arXiv:2107.13586, 2021<br/>
                        [Pu et al., 2021] Jie Pu, Yuguang Yang, Ruirui Li, Oguz Elibol, Jasha Droppo, Scaling Effect of Self-Supervised Speech Models, Interspeech, 2021<br/>
                        [Peng et al., 2021] Puyuan Peng, David Harwath, Fast-Slow Transformer for Visually Grounding Speech, arXiv:2109.08186, 2021<br/>
                        [Shor et al., 2020] Joel Shor, Aren Jansen, Ronnie Maor, Oran Lang, Omry Tuval, Felix de Chaumont Quitry, Marco Tagliasacchi, Ira Shavitt, Dotan Emanuel, Yinnon Haviv, Towards Learning a Universal Non-Semantic Representation of Speech, Interspeech, 2020<br/>
                        [Shor et al., 2021] Joel Shor, Aren Jansen, Wei Han, Daniel Park, Yu Zhang, Universal Paralinguistic Speech Representations Using Self-Supervised Conformers, arXiv:2110.04621, 2021<br/>
                        [Wu et al., 2021] Haibin Wu, Bo Zheng, Xu Li, Xixin Wu, Hung-yi Lee, Helen Meng, Characterizing the adversarial vulnerability of speech self-supervised learning, arXiv:2111.04330, 2021<br/>
                        [Yang et al., 2021] Shu-wen Yang, Po-Han Chi, Yung-Sung Chuang, Cheng-I Jeff Lai, Kushal Lakhotia, Yist Y. Lin, Andy T. Liu, Jiatong Shi, Xuankai Chang, Guan-Ting Lin, Tzu-Hsien Huang, Wei-Cheng Tseng, Ko-tik Lee, Da-Rong Liu, Zili Huang, Shuyan Dong,  Shang-Wen Li, Shinji Watanabe, Abdelrahman Mohamed, Hung-yi Lee, SUPERB: Speech Processing Universal PERformance Benchmark, Interspeech, 2021<br/>
                        [Yu et al., 2019] Jiahui Yu, Linjie Yang, Ning Xu, Jianchao Yang, Thomas Huang, Slimmable Neural Networks, ICLR, 2019<br/>
                        <br/>
                    </p>
                </section>
            </div>
        )
    }
}

export {IntroPage}
