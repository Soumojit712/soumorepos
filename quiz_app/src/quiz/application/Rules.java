package quiz.application;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class Rules extends JFrame implements ActionListener{
    String name;
    JButton start,back;
    Rules(String name){
        this.name=name;
        getContentPane().setBackground(Color.WHITE);
        setLayout(null);
        
        JLabel heading = new JLabel("Welcome "+name+" to Simple Minds");
        heading.setBounds(50,20,700,30);
        heading.setFont(new Font("Viner Hand ITC",Font.BOLD,28));
        heading.setForeground(new Color(30,144,254));
        add(heading);
        
        JLabel rules = new JLabel("");
        rules.setBounds(20,90,700,350);
        rules.setFont(new Font("Tahoma",Font.PLAIN,16));
        rules.setText("<html>"+ 
                "1.Eligibility: Participants must meet the eligibility criteria set by the contest organizers." + "<br><br>" +
                "2.Registration: Complete the registration process accurately and within the specified deadline." + "<br><br>" +
                "3.Team Size: If the contest allows team participation, adhere to the maximum and minimum team size requirements." + "<br><br>" +
                "4.Fair Play: Participants must play fairly, without cheating, using unauthorized aids, or engaging in plagiarism." + "<br><br>" +
                "5.Respect: Show respect to fellow participants, organizers, and moderators at all times. Avoid disruptive or disrespectful behavior." + "<br><br>" +
                "6.Answer Format: Follow the specified format for answering questions (e.g., multiple-choice, true/false, short answer) as provided by the organizers." + "<br><br>" +
                "7.Silence: Maintain silence when questions are being read or displayed to avoid disturbing others." + "<br><br>" +
                "8.Technology Usage: Use electronic devices or technology only as permitted by the organizers, and refrain from using them for cheating." + "<br><br>" +
            "<html>");
        rules.setForeground(new Color(30,144,254));
        add(rules);
        
        start = new JButton("START");
        start.setBounds(250,500,100,30);
        start.addActionListener(this);
        add(start);
        
        back = new JButton("BACK");
        back.setBounds(400,500,100,30);
        back.addActionListener(this);
        add(back);
        
        setSize(800,650);
        setLocation(300,150);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent ae){
        if(ae.getSource() == start){
            setVisible(false);
            new Quiz(name);
        }else if(ae.getSource() == back){
            setVisible(false);
            new Login();
        }
    }
    public static void main(String[] args){
        new Rules("USer");
    }
}
