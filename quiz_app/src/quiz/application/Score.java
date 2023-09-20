package quiz.application;

import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

public class Score extends JFrame implements ActionListener{
    String name;
    int score;
    Score(String name,int score){
        this.name = name;
        this.score = score;
        setBounds(600,150,750,550);
        getContentPane().setBackground(Color.WHITE);
        setLayout(null);
         
        ImageIcon i1= new ImageIcon(ClassLoader.getSystemResource("icons/score.jpg"));
        Image i2 = i1.getImage().getScaledInstance(300,250,Image.SCALE_DEFAULT);
        ImageIcon i3 = new ImageIcon(i2);
        JLabel image = new JLabel(i3);
        image.setBounds(0,200,300,250);
        add(image);
        
        JLabel qno = new JLabel("Thank you "+name+" for playing Simple Minds");
        qno.setBounds(45,30,700,30);
        qno.setFont(new Font("Arial",Font.PLAIN,26));
        add(qno);
        
        JLabel scr = new JLabel("Your score is "+score);
        scr.setBounds(400,200,300,30);
        scr.setFont(new Font("Tahoma",Font.PLAIN,26));
        add(scr);
        
        JButton submit = new JButton("PLAY AGAIN");
        submit.setBounds(340,270,300,30);
        submit.setFont(new Font("Tahoma",Font.PLAIN,22));
        submit.setBackground(new Color(30,144,255));
        submit.setForeground(Color.WHITE);
        submit.addActionListener(this);
        add(submit);
        
        setVisible(true);
    }
    public void actionPerformed(ActionEvent ae){
        setVisible(false);
        new Login();
    }
    public static void main(String [] args){
        new Score("USer",0);
    }
}
